import React from 'react';
import {IEntityData} from "../../store/reEntities/re_entities.slice";

const EntityCard: React.FC<IEntityData> = (data) => {
    console.log('entity card rerender', data.id);

    return (
        <div>
            [{ data.id }] <b>{ data.title }</b> - { data.text }
        </div>
    );
};

export default React.memo(EntityCard);