import {useMemo} from "react";
import {useMySelector} from "./redux.hook";
import {StoreType} from "../store/index.store";
import {TypedUseSelectorHook} from "react-redux";

export const useMemoSelector = function<T> (state: keyof StoreType) {
    return useMemo<T>(() => useMySelector(store => store[state]) as T, []);
}