import React from 'react';
import Input from "../../UI/Inputs/Input/Input";
import Button from "../../UI/Buttons/Button/Button";
import {useNavigate} from "react-router-dom";
import {useActions, useMySelector} from "../../../hooks/redux.hook";
import {useInputValue} from "../../../hooks/useInputValue";
import {useLazyRegistrationQuery} from "../../../store/auth/auth.api";

const AuthRegistration = () => {
    const navigate = useNavigate();
    const { setBearer, setUserLogin, addUserEntities, addUserTrees } = useActions();
    const auth = useMySelector((state) => state.auth);
    const [dispatchRegistration, { isFetching, data, isError }] = useLazyRegistrationQuery();

    const login = useInputValue('');
    const pass = useInputValue('');

    const registrationMethod = () => {
        dispatchRegistration({ login: login.current, password: pass.current }).then((response) => {
            setBearer(response.data.token);
            setUserLogin(response.data.login);
            addUserEntities(response.data.entities ?? []);
            addUserTrees(response.data.trees ?? []);

            navigate(`/${login.current}`);
        })
    }

    return (
        <div>
            <Input active inputValue={login} placeholder={'Login'}/>
            <Input active inputValue={pass} placeholder={'Pass'} type={'pass'}/>
            <Button active onClick={() => registrationMethod()}>Registration</Button>
        </div>
    );
};

export default AuthRegistration;