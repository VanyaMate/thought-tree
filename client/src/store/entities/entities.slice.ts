import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEntity, IEntityData} from "../../components/Entity/Entity";

export type entityTree = { [key: number]: IEntityPoint };

export interface IEntityPoint {
    data: IEntityData,              // Информация об entity
    redactedData: IEntityData,      // Измененная информация
    redactMode: boolean,            // Мод редактирования
    edited: boolean,                // Было изменено
    saved: boolean,                 // Данные совпадают с БД
    points: number[],               // IDs детей
}

export interface IEntitiesSliceData {
    tree_json: string,
    generated_tree_json: string,
    entityTrees: entityTree,
    treeRootId: number,
    rootId: number,
    treeId: number,
}

export interface IEntityJsonPoint {
    id: number,
    points: IEntityJsonPoint[],
}

const initialState: IEntitiesSliceData = {
    tree_json: '',                  // Устанавливается один раз, из него формируется entityTrees и rootId
    generated_tree_json: '',        // Генерируется из entityTrees в json для сохранения
    entityTrees: {},                // Содержит список всех ентити с их родителями
    treeRootId: -1,                 // Содержит в себе id с которого начинается дерево
    rootId: -1,                     // Содержит в себе id с которого начать строить дерево
    treeId: -1,                     // Содержит в себе id дерева
}

// Сгенерировать entityTrees из дерева
const getEntityTreesByTree = function (tree: IEntity, entityTrees: entityTree) {
    if (tree.data) {
        entityTrees[tree.data.id] = {
            data: tree.data,
            redactedData: tree.data,
            redactMode: false,
            edited: false,
            saved: true,
            points: tree.points.map((point) => point.data && point.data.id)
        }

        tree.points.forEach((point) => {
            getEntityTreesByTree(point, entityTrees);
        })
    }

    return entityTrees;
}

const generateNewTreeToJsonById = function (currentId: number, entityTrees: entityTree, currentPoint = {} as IEntityJsonPoint) {
    currentPoint.id = currentId;
    currentPoint.points = entityTrees[currentId].points.map((point) => entityTrees[point] && generateNewTreeToJsonById(point, entityTrees)).filter((point) => !!point);

    return currentPoint;
}

export const entitiesSlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {
        setEntityRedactMode: (state, action: PayloadAction<{ id: number, mode: boolean }>) => {
            const entity = state.entityTrees[action.payload.id];
            if (entity) {
                entity.redactMode = action.payload.mode;
            }
        },
        toggleEntityRedactMode: (state, action: PayloadAction<number>) => {
            const entity = state.entityTrees[action.payload];
            if (entity) {
                entity.redactMode = !entity.redactMode;
            }
        },
        setCurrentTreeJson: (state, action: PayloadAction<string>) => {
            state.tree_json = action.payload;

            try {
                const rootEntity = JSON.parse(action.payload) as IEntity;
                state.treeRootId = rootEntity.data.id;
                state.rootId = rootEntity.data.id;
                state.entityTrees = getEntityTreesByTree(rootEntity, {});
            }
            catch (e) {
                console.log(e);
                state.entityTrees = {};
            }
        },
        setCurrentTreeId: (state, action: PayloadAction<number>) => {
            state.treeId = action.payload;
        },
        addNewPointToEntity: (state, action: PayloadAction<{ entityId: number, point: IEntityPoint }>) => {
            const newPointId = action.payload.point.data.id;
            state.entityTrees[newPointId] = action.payload.point;
            state.entityTrees[action.payload.entityId].points.push(newPointId);
        },
        removeEntity: (state, action: PayloadAction<number>) => {
            delete state.entityTrees[action.payload];
        },
        updateEntityData: (state, action: PayloadAction<number>) => {
            const entity = state.entityTrees[action.payload];
            entity.data.title = entity.redactedData.title;
            entity.data.text = entity.redactedData.text;
            entity.edited = false;
            entity.saved = true;
        },
        updateEntityRedactData: (state, action: PayloadAction<{ entityId: number, data: { title?: string, text?: string } }>) => {
            console.log('update data', action.payload);
            const entity = state.entityTrees[action.payload.entityId];

            if (entity && (action.payload.data.title || action.payload.data.text)) {
                entity.redactedData.title = action.payload.data.title ?? entity.redactedData.title;
                entity.redactedData.text = action.payload.data.text ?? entity.redactedData.text;
                entity.edited = true;
                entity.saved = false;
            }
        },
        discardEntityChanges: (state, action: PayloadAction<number>) => {
            const entity = state.entityTrees[action.payload];

            entity.redactedData.title = entity.data.title;
            entity.redactedData.text = entity.data.text;

            entity.edited = false;
            entity.saved = true;
        },
        setEntityStatus: (state, action: PayloadAction<{ entityId: number, edited?: boolean, saved?: boolean }>) => {
            const entity = state.entityTrees[action.payload.entityId];

            if (entity) {
                entity.edited = action.payload.edited ?? entity.edited;
                entity.saved = action.payload.saved ?? entity.saved;
            }
        },
        generateTreeJson: (state, action: PayloadAction<number>) => {
            state.generated_tree_json = JSON.stringify(generateNewTreeToJsonById(action.payload, state.entityTrees));
            console.log(state.generated_tree_json);
        },
        setEntityRootId: (state, action: PayloadAction<number>) => {
            state.rootId = action.payload;
        },
        resetCurrentEntity: (state) => {
            state.entityTrees = {};
            state.tree_json = '';
            state.rootId = -1;
        }
    }
})

export const entitiesActions = entitiesSlice.actions;
export const entitiesReducer = entitiesSlice.reducer;

