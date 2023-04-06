import React from 'react';
import {useParams} from "react-router-dom";

const Profile = () => {
    const params = useParams<{ login: string }>()

    return (
        <div>
            Profile { params.login }
        </div>
    );
};

export default Profile;