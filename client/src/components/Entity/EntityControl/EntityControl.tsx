import React, {useMemo} from 'react';
import css from './EntityControl.module.scss';
import {useActions, useMySelector} from "../../../hooks/redux.hook";
import {useLazyDeleteEntityQuery, useLazyUpdateEntityQuery} from "../../../store/entities/entities.api";
import {useNavigate, useParams} from "react-router-dom";
import SmallIconButton from "../../UI/Buttons/SmallIconButton/SmallIconButton";

export interface IEntityControlId {
    id: number,
}

const EntityControl: React.FC<IEntityControlId> = (props) => {
    const navigation = useNavigate();
    const params = useParams<{ treeId: string, rootId: string }>();
    const { toggleEntityRedactMode, setEntityStatus, setEntityRootId, removeEntity } = useActions();
    const entities = useMySelector((state) => state.entities);
    const auth = useMySelector((state) => state.auth);
    const [dispatchEntityUpdate, {}] = useLazyUpdateEntityQuery();
    const [dispatchDelete, {}] = useLazyDeleteEntityQuery();

    const currentData = useMemo(() => entities.entityTrees[props.id], [entities.entityTrees[props.id]]);

    return (
        <div className={css.container}>
            <div className={css.left}>
                <SmallIconButton
                    onClick={() => toggleEntityRedactMode(props.id)}
                    icon={'/icons/editing.png'}
                    info={'Переключить режим редактирования'}
                    active
                />
                <SmallIconButton
                    onClick={() =>
                        dispatchEntityUpdate({ id: props.id, title: currentData.data.title, text: currentData.data.text, token: auth.bearer })
                            .then((response) => setEntityStatus({ entityId: props.id, edited: false, saved: true }))
                    }
                    icon={'/icons/diskette.png'}
                    info={'Сохранить'}
                    active={!entities.entityTrees[props.id].saved}
                />
                <SmallIconButton
                    onClick={() => {

                    }}
                    icon={'/icons/delete.png'}
                    info={'Удалить'}
                    active
                />
            </div>
            <div className={css.right}>
                <SmallIconButton
                    onClick={() => {
                        setEntityRootId(props.id);
                        navigation(`/tree/${params.treeId}/${props.id}`)
                    }}
                    icon={'/icons/touchscreen.png'}
                    info={'Выбрать основным'}
                    active={entities.rootId !== props.id}
                />
            </div>
        </div>
    );
};

export default EntityControl;