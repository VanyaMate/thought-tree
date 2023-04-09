import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {themeSlideReducer} from "./theme/theme.slice";
import {playgroundReducer} from "./playground/playground.slice";
import {entitiesReducer} from "./entities/entities.slice";
import {authReducer} from "./auth/auth.slice";
import {authApi} from "./auth/auth.api";
import {userReducer} from "./user/user.slice";
import {treeApi} from "./tree/tree.api";

export const store = configureStore({
    reducer: {
        'api/auth': authApi.reducer,
        'api/tree': treeApi.reducer,
        theme: themeSlideReducer,
        playground: playgroundReducer,
        entities: entitiesReducer,
        auth: authReducer,
        user: userReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        authApi.middleware,
        treeApi.middleware,
    ])
})

export type StoreType = ReturnType<typeof store.getState>;