import React from 'react';
import {useActions, useMySelector} from "../../../hooks/redux.hook";
import Button from "../../../components/UI/Buttons/Button/Button";
import {Link} from "react-router-dom";

const HeaderProfile = () => {
    const user = useMySelector((state) => state.user);
    const { resetUserData, resetBearer } = useActions();

    const signOut = function () {
        resetBearer();
        resetUserData();
    }

    return (
        <div>
            <Link to={`/${ user.login }`}>{ user.login }</Link>
            <Button active onClick={signOut}>Выход</Button>
        </div>
    );
};

export default HeaderProfile;