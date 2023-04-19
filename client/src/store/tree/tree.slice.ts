import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ITreeSlice {
    tree_json: string,
    treeId: number,
    rootId: number,
    currentRootId: number,
}

const initialState: ITreeSlice = {
    rootId: 0, treeId: 0, currentRootId: 0, tree_json: ""
}

export const treeSlice = createSlice({
    name: 'tree',
    initialState,
    reducers: {
        setTreeJson: (state, action: PayloadAction<string>) => {
            state.tree_json = action.payload;
        },
        setTreeId: (state, action: PayloadAction<number>) => {
            state.treeId = action.payload;
        },
        setTreeRootId: (state, action: PayloadAction<number>) => {
            state.rootId = action.payload;
        },
        setTreeCurrentRootId: (state, action: PayloadAction<number>) => {
            state.currentRootId = action.payload;
        },
    }
})

export const treeActions = treeSlice.actions;
export const treeReducer = treeSlice.reducer;