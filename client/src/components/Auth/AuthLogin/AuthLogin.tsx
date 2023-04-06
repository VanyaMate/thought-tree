import React from 'react';
import Input from "../../UI/Inputs/Input/Input";
import Button from "../../UI/Buttons/Button/Button";
import {useNavigate} from "react-router-dom";
import {useMySelector} from "../../../hooks/redux.hook";
import {useInputValue} from "../../../hooks/useInputValue";

const AuthLogin = () => {
    const navigate = useNavigate();
    const auth = useMySelector((state) => state.auth);
    const login = useInputValue('');
    const pass = useInputValue('');

    const authMethod = () => {
        console.log('auth with', login.current, pass.current);
    }

    return (
        <div>
            <Input active inputValue={login} placeholder={'Login'}/>
            <Input active inputValue={pass} placeholder={'Pass'} type={'pass'}/>
            <Button active onClick={() => authMethod()}>Login</Button>
        </div>
    );
};

export default AuthLogin;