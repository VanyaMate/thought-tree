import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEntity, IEntityData} from "../../components/Entity/Entity";

export type entityTree = { [key: number]: IEntityPoint };

export interface IEntityPoint {
    data: IEntityData,
    redactMode: boolean,
    points: number[],
}

export interface IEntitiesSliceData {
    tree_json: string,
    generated_tree_json: string,
    entityTrees: entityTree,
    rootId: number,
}

export interface IEntityJsonPoint {
    id: number,
    points: IEntityJsonPoint[],
}

const initialState: IEntitiesSliceData = {
    tree_json: '',                  // Устанавливается один раз, из него формируется entityTrees и rootId
    generated_tree_json: '',        // Генерируется из entityTrees в json для сохранения
    entityTrees: {},                // Содержит список всех ентити с их родителями
    rootId: -1,                     // Содержит в себе id с которого начать строить дерево
}

// Сгенерировать entityTrees из дерева
const getEntityTreesByTree = function (tree: IEntity, entityTrees: entityTree) {
    entityTrees[tree.data.id] = {
        data: tree.data,
        redactMode: false,
        points: tree.points.map((point) => point.data.id)
    }

    tree.points.forEach((point) => {
        getEntityTreesByTree(point, entityTrees);
    })

    return entityTrees;
}

const generateNewTreeToJsonById = function (currentId: number, entityTrees: entityTree, currentPoint = {} as IEntityJsonPoint) {
    currentPoint.id = currentId;
    currentPoint.points = entityTrees[currentId].points.map((point) => generateNewTreeToJsonById(point, entityTrees))

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
        setCurrentTreeJson: (state, action: PayloadAction<string>) => {
            state.tree_json = action.payload;

            try {
                const rootEntity = JSON.parse(action.payload) as IEntity;
                state.rootId = rootEntity.data.id;
                state.entityTrees = getEntityTreesByTree(rootEntity, {});
            }
            catch (e) {
                state.entityTrees = {};
            }
        },
        addNewPointToEntity: (state, action: PayloadAction<{ entityId: number, point: IEntityPoint }>) => {
            const newPointId = action.payload.point.data.id;
            state.entityTrees[newPointId] = action.payload.point;
            state.entityTrees[action.payload.entityId].points.push(newPointId);
        },
        generateTreeJson: (state, action: PayloadAction<number>) => {
            state.generated_tree_json = JSON.stringify(generateNewTreeToJsonById(action.payload, state.entityTrees));
            console.log(state.generated_tree_json);
        },
        resetCurrentEntity: (state) => {

        },
        addChildToCurrentEntity: (state, action: PayloadAction<any>) => {

        }
    }
})

export const entitiesActions = entitiesSlice.actions;
export const entitiesReducer = entitiesSlice.reducer;

