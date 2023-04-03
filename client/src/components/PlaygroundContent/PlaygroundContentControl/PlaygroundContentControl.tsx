import React from 'react';
import css from './PlaygroundContentControl.module.scss';
import SmallButton from "../../UI/Buttons/SmallButton/SmallButton";
import {useActions, useMySelector} from "../../../hooks/redux.hook";

const PlaygroundContentControl = () => {
    const entities = useMySelector((state) => state.entities);
    const {setEntitiesRedactMode} = useActions();

    return (
        <div className={css.container}>
            <SmallButton className={[css.button, entities.redactMode ? css.active : ''].join(' ')} onClick={() => setEntitiesRedactMode(!entities.redactMode)} active/>
        </div>
    );
};

export default PlaygroundContentControl;