import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEntity, IEntityData} from "../../components/Entity/Entity";

export interface IEntities {
    currentEntity: IEntity | null,
    entityList: { [key: string]: IEntity },
    redactMode: boolean,
}

const initialState: IEntities = {
    currentEntity: null,
    entityList: {},
    redactMode: false,
}

const findEntity = (tree: IEntity, entity: IEntity): IEntity | undefined => {
    if (tree.data.id === entity.data.id) {
        return tree;
    } else {
        return tree.points.filter((child) => findEntity(child, entity))[0]
    }
}

export const entitiesSlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {
        setEntitiesRedactMode: (state, action: PayloadAction<boolean>) => {
            state.redactMode = action.payload;
        },
        setCurrentEntity: (state, action: PayloadAction<IEntity>) => {
            state.currentEntity = action.payload;
        },
        resetCurrentEntity: (state) => {
            state.currentEntity = null;
        },
        addChildToCurrentEntity: (state, action: PayloadAction<{ entity: IEntity, child: IEntityData, author: string }>) => {
            const entity = findEntity(state.currentEntity!, action.payload.entity);
            if (entity) {
                entity.points.push({data: {...action.payload.child, author: { id: 1, login: action.payload.author } }, points: []});
            }
        }
    }
})

export const entitiesActions = entitiesSlice.actions;
export const entitiesReducer = entitiesSlice.reducer;

