import React from 'react';
import {useParams} from "react-router-dom";

const EntityPage = () => {
    const params = useParams<{ login: string, treeName: string, entityId: string }>();

    return (
        <div>
            EntityPage { params.login } / { params.treeName } / { params.entityId}
        </div>
    );
};

export default EntityPage;