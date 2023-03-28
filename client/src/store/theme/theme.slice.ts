import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum Theme {
    DARK,
    LIGHT
}

export interface ITheme {
    type: Theme
}

const initialState: ITheme = {
    type: Theme.DARK
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme (state, action: PayloadAction<Theme>) {
            state.type = action.payload;
        },
        toggleTheme (state) {
            state.type = state.type === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        }
    }
})

export const themeSliceActions = themeSlice.actions;
export const themeSlideReducer = themeSlice.reducer;