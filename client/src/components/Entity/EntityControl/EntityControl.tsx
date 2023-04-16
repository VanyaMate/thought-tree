import React from 'react';
import css from './EntityControl.module.scss';
import {useActions, useMySelector} from "../../../hooks/redux.hook";

export interface IEntityControlId {
    id: number,
}

const EntityControl: React.FC<IEntityControlId> = (props) => {
    const { toggleEntityRedactMode } = useActions();
    const entities = useMySelector((state) => state.entities);

    return (
        <div className={css.container}>
            <div>Left Side</div>
            <div onClick={() => toggleEntityRedactMode(props.id)}>Redact [{ entities.entityTrees[props.id].redactMode.toString() }]</div>
        </div>
    );
};

export default EntityControl;