import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEntityData} from "../../components/Entity/Entity";
import {userStorage} from "../../cfg/storages";
import {act} from "react-dom/test-utils";

export interface ITreeData {
    id: number,
    title: string,
    description: string,
    likesAmount: number,
    showsCount: number,
    createdAt: string,
    updatedAt: string,
    author: string,
    tree_json: string, // JSON
}

export interface IUser {
    login: string,
    trees: ITreeData[],
    entities: IEntityData[]
}

const userSavedData: IUser = JSON.parse(localStorage.getItem(userStorage) ?? "{}");

const initialState: IUser = {
    login: userSavedData.login ?? '',
    trees: [],
    entities: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
            localStorage.setItem(userStorage, JSON.stringify(state));
        },
        addUserTrees: (state, action: PayloadAction<ITreeData[]>) => {
            state.trees = [...state.trees, ...action.payload];
        },
        addUserEntities: (state, action: PayloadAction<IEntityData[]>) => {
            state.entities = [...state.entities, ...action.payload];
        },
        removeUserTree: (state, action: PayloadAction<number>) => {
            state.trees = state.trees.filter((tree) => tree.id !== action.payload);
        },
        removeUserEntity: (state, action: PayloadAction<number>) => {
            state.entities = state.entities.filter((entity) => entity.id !== action.payload);
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