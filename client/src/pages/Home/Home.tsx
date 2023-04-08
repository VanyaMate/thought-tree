import React from 'react';
import ContentSize from "../../pageElements/Content/ContentSize/ContentSize";
import UserEntityList from "../../components/_common/UserEntityList/UserEntityList";
import {useMySelector} from "../../hooks/redux.hook";
import css from './Home.module.scss';
import News from "../../components/_common/News/News";
import Vertical from "../../components/Containers/Vertical/Vertical";
import UserTreeList from "../../components/_common/UserTreeList/UserTreeList";

const Home = () => {
    const user = useMySelector((state) => state.user);

    return (
        <ContentSize className={css.container}>
            <Vertical offset={10} className={css.left}>
                <News/>
                <News/>
                <News/>
                <News/>
            </Vertical>
            <Vertical offset={10} className={css.right}>
                <UserTreeList user={user}/>
                <UserEntityList user={user}/>
            </Vertical>
        </ContentSize>
    );
};

export default React.memo(Home);