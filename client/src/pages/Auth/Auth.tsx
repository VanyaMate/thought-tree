import React from 'react';
import Input from "../../components/UI/Inputs/Input/Input";
import {useInputValue} from "../../hooks/useInputValue";
import {useNavigate, useNavigation} from "react-router-dom";
import {useMySelector} from "../../hooks/redux.hook";
import Button from "../../components/UI/Buttons/Button/Button";

const Auth = () => {
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

export default Auth;