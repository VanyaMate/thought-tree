import React from 'react';
import Input from "../../components/UI/Inputs/Input/Input";
import {useInputValue} from "../../hooks/useInputValue";

const Auth = () => {
    const login = useInputValue('');
    const pass = useInputValue('');

    const authMethod = () => {
        console.log('auth with', login.current, pass.current);
    }

    return (
        <div>
            <Input active inputValue={login} placeholder={'Login'}/>
            <Input active inputValue={pass} placeholder={'Pass'} type={'pass'}/>
            <button onClick={() => authMethod()}>Login</button>
        </div>
    );
};

export default Auth;