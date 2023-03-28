import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IPlayground {
    coords: ICoords
}

export interface ICoords {
    x: number,
    y: number
}

const initialState: IPlayground = {
    coords: { x: 0, y: 0 }
};

export const playgroundSlice = createSlice({
    name: 'playground',
    initialState,
    reducers: {
        setPlaygroundCoords (state, action: PayloadAction<ICoords>) {
            state.coords = action.payload;
        }
    }
})

export const playgroundActions = playgroundSlice.actions;
export const playgroundReducer = playgroundSlice.reducer;