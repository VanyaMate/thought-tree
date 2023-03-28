import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {themeSlideReducer} from "./theme/theme.slice";
import {playgroundReducer} from "./playground/playground.slice";

export const store = configureStore({
    reducer: {
        theme: themeSlideReducer,
        playground: playgroundReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([

    ])
})

export type StoreType = ReturnType<typeof store.getState>;