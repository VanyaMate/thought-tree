import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {StoreType} from "../store/index.store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {themeSliceActions} from "../store/theme/theme.slice";
import {playgroundActions} from "../store/playground/playground.slice";
import {entitiesActions} from "../store/entities/entities.slice";
import {authActions} from "../store/auth/auth.slice";
import {userActions} from "../store/user/user.slice";
import {re_entitiesActions} from "../store/reEntities/re_entities.slice";
import {treeActions} from "../store/tree/tree.slice";

const actions = {
    ...themeSliceActions,
    ...playgroundActions,
    ...authActions,
    ...userActions,
    ...re_entitiesActions,
    ...treeActions,
}

export const useMySelector: TypedUseSelectorHook<StoreType> = useSelector;
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}