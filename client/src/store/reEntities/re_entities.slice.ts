import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getEntityTreesByTree} from "../../../utils/entities/entity-tree-json.methods";

export type EntityList = { [key: number]: IEntityPoint };

/**
 * Данные о Entity
 */
export interface IEntityData {
    id: number,
    title: string,
    text: string,
    likesAmount: number,
    showsCount: number,
    author: string,
    createdAt?: string,
    updatedAt?: string,
}

/**
 * Формат хранения информации и статусов Entity
 */
export interface IEntityPoint {
    data: IEntityData,
    points: number[],
    redactMode: boolean,
    edited: boolean,
}

export interface IEntityTree {
    data: IEntityData,
    points: IEntityTree[]
}

export interface IEntityTreeJsonPoint {
    id: number,
    points: IEntityTreeJsonPoint[],
}

/**
 * Общее хранилище
 */
export interface IEntitySlice {
    list: EntityList
}

const initialState: IEntitySlice = {
    list: {}
}

export const re_entitiesSlice = createSlice({
    name: 're_entities',
    initialState: initialState,
    reducers: {
        // EntitySlice
        setEntityList: (state, action: PayloadAction<EntityList>) => {
            state.list = action.payload;
        },
        resetEntityList: (state) => {
            state.list = {};
        },
        setEntityListByJson: (state, action: PayloadAction<IEntityTree>) => {
            try {
                state.list = getEntityTreesByTree(action.payload, {});
            }
            catch (e) {
                state.list = {};
            }
        },

        // List
        addEntityToList: (state, action: PayloadAction<{ id: number, point: IEntityPoint }>) => {
            state.list[action.payload.id] = action.payload.point;
        },
        removeEntityFromList: (state, action: PayloadAction<number>) => {
            delete state.list[action.payload];
        },

        // Entity
        setEntityRedactMode: (state, action: PayloadAction<{ id: number, status: boolean }>) => {
            const entity = state.list[action.payload.id]

            if (!!entity) {
                entity.redactMode = action.payload.status;
            }
        },
        toggleEntityRedactMode: (state, action: PayloadAction<number>) => {
            const entity = state.list[action.payload]

            if (!!entity) {
                entity.redactMode = !entity.redactMode;
            }
        },

        setEntityData: (state, action: PayloadAction<{ id: number, title?: string, text?: string }>) => {
            const entity = state.list[action.payload.id]

            if (!!entity && (action.payload.title || action.payload.text)) {
                entity.data.title = action.payload.title ?? entity.data.title;
                entity.data.text = action.payload.text ?? entity.data.text;

                entity.edited = true;
            }
        },
        setEntityEdited: (state, action: PayloadAction<{ id: number, status: boolean }>) => {
            const entity = state.list[action.payload.id];

            if (!!entity) {
                entity.edited = action.payload.status;
            }
        },
    }
})

export const re_entitiesActions = re_entitiesSlice.actions;
export const re_entitiesReducer = re_entitiesSlice.reducer;