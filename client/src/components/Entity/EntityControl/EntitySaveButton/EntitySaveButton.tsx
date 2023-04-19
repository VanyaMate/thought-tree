import React, {useMemo} from 'react';
import SmallIconButton from "../../../UI/Buttons/SmallIconButton/SmallIconButton";
import {useActions, useMySelector} from "../../../../hooks/redux.hook";
import {useLazyUpdateEntityQuery} from "../../../../store/entities/entities.api";
import {IEntityId} from "../EntityToggleRedactModeButton/EntityToggleRedactModeButton";

const EntitySaveButton: React.FC<IEntityId> = (props) => {
    const entities = useMySelector((state) => state.entities);
    const [dispatchEntityUpdate, {}] = useLazyUpdateEntityQuery();
    const auth = useMySelector((state) => state.auth);
    const currentData = useMemo(() => entities.entityTrees[props.id], [entities.entityTrees[props.id]]);
    const { setEntityStatus, updateEntityData, setEntityRedactMode } = useActions();

    return (
        <SmallIconButton
            onClick={() => {
                updateEntityData(props.id);
                setEntityRedactMode({id: props.id, mode: false});
                dispatchEntityUpdate({
                    id: props.id,
                    title: currentData.redactedData.title,
                    text: currentData.redactedData.text,
                    token: auth.bearer
                })
                    .then((response) => setEntityStatus({entityId: props.id, edited: false, saved: true}))

            }}
            icon={'/icons/diskette.png'}
            info={'Сохранить'}
            active={!entities.entityTrees[props.id].saved}
        />
    );
};

export default EntitySaveButton;