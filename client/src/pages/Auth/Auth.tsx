import React from 'react';
import AuthLogin from "../../components/Auth/AuthLogin/AuthLogin";
import AuthRegistration from "../../components/Auth/AuthRegistration/AuthRegistration";
import ContentSize from "../../pageElements/Content/ContentSize/ContentSize";

const Auth = () => {
    return (
        <ContentSize>
            <AuthLogin/>
            <AuthRegistration/>
        </ContentSize>
    );
};

export default React.memo(Auth);