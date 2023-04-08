import React from 'react';
import {useParams} from "react-router-dom";
import ContentSize from "../../pageElements/Content/ContentSize/ContentSize";

const EntityPage = () => {
    const params = useParams<{ login: string, treeName: string, entityId: string }>();

    return (
        <ContentSize>
            EntityPage { params.login } / { params.treeName } / { params.entityId}
        </ContentSize>
    );
};

export default React.memo(EntityPage);