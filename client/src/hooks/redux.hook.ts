import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {StoreType} from "../store/index.store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {themeSliceActions} from "../store/theme/theme.slice";
import {playgroundActions} from "../store/playground/playground.slice";
import {entitiesActions} from "../store/entities/entities.slice";
import {authActions} from "../store/auth/auth.slice";

const actions = {
    ...themeSliceActions,
    ...playgroundActions,
    ...entitiesActions,
    ...authActions
}

export const useMySelector: TypedUseSelectorHook<StoreType> = useSelector;
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}