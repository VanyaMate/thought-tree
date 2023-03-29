import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PlaygroundTheme} from "../../types/variations.themes";

export interface IPlayground {
    scrolled: boolean,
    coords: ICoords,
    currentCoords: ICoords,
    mouseStartCoords: ICoords,
    mouseCoords: ICoords,
    theme: PlaygroundTheme
}

export interface ICoords {
    x: number,
    y: number
}

const initialState: IPlayground = {
    scrolled: false,
    coords: { x: 0, y: 0 },
    currentCoords: { x: 0, y: 0 },
    mouseStartCoords: { x: 0, y: 0 },
    mouseCoords: { x: 0, y: 0 },
    theme: PlaygroundTheme.PARTS
};

export const playgroundSlice = createSlice({
    name: 'playground',
    initialState,
    reducers: {
        setPlaygroundMouseStartCoords (state, action: PayloadAction<ICoords>) {
            state.mouseStartCoords = action.payload;
        },
        setPlaygroundMouseCoords (state, action: PayloadAction<ICoords>) {
            state.mouseCoords = action.payload;

            const x = state.coords.x + state.mouseStartCoords.x - state.mouseCoords.x;
            const y = state.coords.y + state.mouseStartCoords.y - state.mouseCoords.y;

            state.currentCoords = {
                x: x < 0 ? 0 : x,
                y: y < 0 ? 0 : y,
            }
        },
        setPlaygroundCoordsToCurrent (state) {
            state.coords = state.currentCoords;
        },
        setPlaygroundCoords (state, action: PayloadAction<ICoords>) {
            state.coords = action.payload;
        },
        setPlaygroundScrolled (state, action: PayloadAction<boolean>) {
            state.scrolled = action.payload
        },
        setPlaygroundTheme (state, action: PayloadAction<PlaygroundTheme>) {
            state.theme = action.payload;
        }
    }
})

export const playgroundActions = playgroundSlice.actions;
export const playgroundReducer = playgroundSlice.reducer;