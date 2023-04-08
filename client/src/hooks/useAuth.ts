import {IUser} from "../store/user/user.slice";
import {useActions} from "./redux.hook";
import {useCallback} from "react";

export interface IAuthUser extends IUser {
    token: string
}

export const useAuth = function () {
    const { setBearer, setUserLogin, addUserEntities, addUserTrees } = useActions();

    return useCallback((user: IAuthUser) => {
        setBearer(user.token);
        setUserLogin(user.login);
        addUserEntities(user.entities || []);
        addUserTrees(user.trees || []);
    }, [])
}

export const useAuthReset = function () {
    const { resetUserData, resetBearer } = useActions();

    return useCallback(() => {
        resetUserData();
        resetBearer();
    }, [])
}