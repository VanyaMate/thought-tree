import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authStorage} from "../../cfg/storages";

export interface IAuth {
    bearer: string
}

const initialState = {
    bearer: localStorage.getItem(authStorage) || ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setBearer: (state, action: PayloadAction<string>) => {
            state.bearer = action.payload;
            localStorage.setItem(authStorage, action.payload)
        },
        resetBearer: (state) => {
            state.bearer = ''
            localStorage.removeItem(authStorage);
        }
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;