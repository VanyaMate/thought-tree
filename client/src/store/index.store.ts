import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {themeSlideReducer} from "./theme/theme.slice";
import {playgroundReducer} from "./playground/playground.slice";
import {entitiesReducer} from "./entities/entities.slice";
import {authReducer} from "./auth/auth.slice";
import {authApi} from "./auth/auth.api";
import {userReducer} from "./user/user.slice";
import {treeApi} from "./tree/tree.api";
import {entitiesApi} from "./entities/entities.api";
import {re_entitiesReducer} from "./reEntities/re_entities.slice";
import {treeReducer} from "./tree/tree.slice";

export const store = configureStore({
    reducer: {
        'api/auth': authApi.reducer,
        'api/tree': treeApi.reducer,
        'api/entities': entitiesApi.reducer,
        theme: themeSlideReducer,
        playground: playgroundReducer,
        entities: entitiesReducer,
        re_entities: re_entitiesReducer,
        auth: authReducer,
        user: userReducer,
        tree: treeReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        authApi.middleware,
        treeApi.middleware,
        entitiesApi.middleware
    ])
})

export type StoreType = ReturnType<typeof store.getState>;