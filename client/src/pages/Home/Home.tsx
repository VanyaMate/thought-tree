import React from 'react';
import ContentSize from "../../pageElements/Content/ContentSize/ContentSize";
import UserEntityList from "../../components/_common/UserEntityList/UserEntityList";
import {useMySelector} from "../../hooks/redux.hook";

const Home = () => {
    const user = useMySelector((state) => state.user);

    return (
        <ContentSize>
            <UserEntityList user={user}/>
        </ContentSize>
    );
};

export default Home;