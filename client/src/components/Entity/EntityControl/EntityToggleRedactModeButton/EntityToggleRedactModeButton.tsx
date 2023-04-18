import React from 'react';
import SmallIconButton from "../../../UI/Buttons/SmallIconButton/SmallIconButton";
import {useActions, useMySelector} from "../../../../hooks/redux.hook";

export interface IEntityId {
    id: number,
}

const EntityToggleRedactModeButton: React.FC<IEntityId> = (props) => {
    const entities = useMySelector((state) => state.entities);
    const { toggleEntityRedactMode } = useActions();

    return (
        <SmallIconButton
            onClick={() => toggleEntityRedactMode(props.id)}
            icon={'/icons/editing.png'}
            info={'Переключить режим редактирования'}
            active
            always={entities.entityTrees[props.id].redactMode}
        />
    );
};

export default EntityToggleRedactModeButton;