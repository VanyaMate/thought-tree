import React from 'react';
import {useActions, useMySelector} from "../../hooks/redux.hook";
import {useMemoSelector} from "../../hooks/useMemoSelector";
import {IEntityTree} from "../../store/reEntities/re_entities.slice";
import Button from "../UI/Buttons/Button/Button";
import EntityCard from "./EntityCard";

const Entity: React.FC<{ id: number }> = ({ id }) => {
    const re_entities = useMySelector((state) => state.re_entities);
    const entity = re_entities.list[id];
    const { toggleEntityRedactMode } = useActions();

    if (!entity) {
        return <></>;
    }

    return (
        <div>
            <Button
                active
                onClick={() => toggleEntityRedactMode(id)}
            >
                Toggle
            </Button>
            <EntityCard {...entity.data}/>
            <br/>
            <hr/>
            <br/>
            {
                entity.points.map((point) => <Entity key={point} id={point}/>)
            }
        </div>
    );
};

export default React.memo(Entity);