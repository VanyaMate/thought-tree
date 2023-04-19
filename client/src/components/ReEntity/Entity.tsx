import React from 'react';
import {useMySelector} from "../../hooks/redux.hook";

const Entity: React.FC<{ id: number }> = ({ id }) => {
    const re_entities = useMySelector((state) => state.re_entities);
    const entity = re_entities.list[id];

    if (!entity) {
        return <></>;
    }

    return (
        <div>
            [{ entity.data.id }] <b>{ entity.data.title }</b> - { entity.data.text }
        </div>
    );
};

export default React.memo(Entity);