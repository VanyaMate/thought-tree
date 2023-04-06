import React from 'react';
import css from './Auth.module.scss';
import AuthLogin from "../../components/Auth/AuthLogin/AuthLogin";
import AuthRegistration from "../../components/Auth/AuthRegistration/AuthRegistration";

const Auth = () => {
    return (
        <div className={css.container}>
            <AuthLogin/>
            <AuthRegistration/>
        </div>
    );
};

export default Auth;