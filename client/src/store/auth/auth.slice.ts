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
        }
    }
})