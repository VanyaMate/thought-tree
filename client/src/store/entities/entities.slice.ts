import {createSlice} from "@reduxjs/toolkit";
import {IEntity} from "../../components/Entity/Entity";

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

export const entitiesSlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {

    }
})

export const entitiesActions = entitiesSlice.actions;
export const entitiesReducer = entitiesSlice.reducer;

