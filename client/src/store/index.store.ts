import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {themeSlideReducer} from "./theme/theme.slice";
import {playgroundReducer} from "./playground/playground.slice";
import {entitiesReducer} from "./entities/entities.slice";

export const store = configureStore({
    reducer: {
        theme: themeSlideReducer,
        playground: playgroundReducer,
        entities: entitiesReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([

    ])
})

export type StoreType = ReturnType<typeof store.getState>;