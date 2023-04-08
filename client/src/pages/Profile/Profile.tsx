import React from 'react';
import {useParams} from "react-router-dom";
import ContentSize from "../../pageElements/Content/ContentSize/ContentSize";

const Profile = () => {
    const params = useParams<{ login: string }>()

    return (
        <ContentSize>
            Profile { params.login }
        </ContentSize>
    );
};

export default React.memo(Profile);