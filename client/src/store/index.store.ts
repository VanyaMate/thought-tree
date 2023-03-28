import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {themeSlideReducer} from "./theme/theme.slice";

export const store = configureStore({
    reducer: {
        theme: themeSlideReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([

    ])
})

export type StoreType = ReturnType<typeof store.getState>;