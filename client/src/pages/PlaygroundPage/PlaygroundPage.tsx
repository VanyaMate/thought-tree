import React from 'react';
import Playground from "../../pageElements/Playground/Playground";
import {IEntity} from "../../components/Entity/Entity";

const PlaygroundPage = () => {
    return (
        <Playground entry={{data: {title: 'title', text: 'text', id: 1}, points: []}}/>
    );
};

export default React.memo(PlaygroundPage);