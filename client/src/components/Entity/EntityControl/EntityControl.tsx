import React, {useMemo} from 'react';
import css from './EntityControl.module.scss';
import {useActions, useMySelector} from "../../../hooks/redux.hook";
import {useLazyUpdateEntityQuery} from "../../../store/entities/entities.api";
import {useNavigate, useParams} from "react-router-dom";

export interface IEntityControlId {
    id: number,
}

const EntityControl: React.FC<IEntityControlId> = (props) => {
    const navigation = useNavigate();
    const params = useParams<{ treeId: string }>();
    const { toggleEntityRedactMode, setEntityStatus, setEntityRootId } = useActions();
    const entities = useMySelector((state) => state.entities);
    const auth = useMySelector((state) => state.auth);
    const [dispatchEntityUpdate, {}] = useLazyUpdateEntityQuery();

    const currentData = useMemo(() => entities.entityTrees[props.id], [entities.entityTrees[props.id]]);

    return (
        <div className={css.container}>
            <div onClick={() =>
                dispatchEntityUpdate({ id: props.id, title: currentData.data.title, text: currentData.data.text, token: auth.bearer })
                    .then((response) => setEntityStatus({ entityId: props.id, edited: false, saved: true }))
            }>Save</div>
            <div onClick={() => {
                setEntityRootId(props.id);
                navigation(`/tree/${params.treeId}/${props.id}`)
            }}>Set root</div>
            <div onClick={() => toggleEntityRedactMode(props.id)}>Redact [{ currentData.redactMode.toString() }]</div>
        </div>
    );
};

export default EntityControl;