import React from 'react';
import SmallIconButton from "../../../UI/Buttons/SmallIconButton/SmallIconButton";
import {IEntityId} from "../EntityToggleRedactModeButton/EntityToggleRedactModeButton";
import {useActions, useMySelector} from "../../../../hooks/redux.hook";
import {useNavigate, useParams} from "react-router-dom";

const EntitySelectLikeRoot: React.FC<IEntityId> = (props) => {
    const { setEntityRootId } = useActions();
    const navigation = useNavigate();
    const params = useParams<{ treeId: string, rootId: string }>();
    const entities = useMySelector((state) => state.entities);

    return (
        <SmallIconButton
            onClick={() => {
                setEntityRootId(props.id);
                navigation(`/tree/${params.treeId}/${props.id}`)
            }}
            icon={'/icons/touchscreen.png'}
            info={'Выбрать основным'}
            active={entities.rootId !== props.id}
        />
    );
};

export default EntitySelectLikeRoot;