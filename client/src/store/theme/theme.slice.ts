import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ColorTheme} from "../../types/variations.themes";
import {themeStorage} from "../../cfg/storages";

export interface ITheme {
    type: string
}

const initialState: ITheme = {
    type: localStorage.getItem(themeStorage) ?? ColorTheme.DARK
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme (state, action: PayloadAction<ColorTheme>) {
            state.type = action.payload;
        },
        toggleTheme (state) {
            state.type = state.type === ColorTheme.DARK ? ColorTheme.LIGHT : ColorTheme.DARK;
            localStorage.setItem(themeStorage, state.type);
        }
    }
})

export const themeSliceActions = themeSlice.actions;
export const themeSlideReducer = themeSlice.reducer;