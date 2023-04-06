import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEntityData} from "../../components/Entity/Entity";
import {userStorage} from "../../cfg/storages";

export interface IUser {
    login: string,
    trees: string[],
    entities: IEntityData[]
}

const userSavedData: IUser = JSON.parse(localStorage.getItem(userStorage) ?? "{}");

const initialState: IUser = {
    login: userSavedData.login ?? '',
    trees: userSavedData.trees ?? [],
    entities: userSavedData.entities ?? [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
            localStorage.setItem(userStorage, JSON.stringify(state));
        },
        addUserTrees: (state, action: PayloadAction<string[]>) => {
            state.trees = [...state.trees, ...action.payload];
            localStorage.setItem(userStorage, JSON.stringify(state));
        },
        addUserEntities: (state, action: PayloadAction<IEntityData[]>) => {
            state.entities = [...state.entities, ...action.payload];
            localStorage.setItem(userStorage, JSON.stringify(state));
        },
        resetUserData: (state) => {
            state.login = '';
            state.trees = [];
            state.entities = [];
            localStorage.setItem(userStorage, JSON.stringify(state));
        }
    }
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;