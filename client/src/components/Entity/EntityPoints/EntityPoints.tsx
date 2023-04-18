import React from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import Entity from "../Entity";

export interface IEntityPoints extends IDefaultComponent {
    points: number[],
    parentId: number,
    card: React.RefObject<HTMLDivElement>,
}

const EntityPoints: React.FC<IEntityPoints> = (props) => {
    const { points, card, parentId, ...other } = props;

    return (
        <div {...other}>
            {
                points.map((point) => <Entity key={point} parentCard={card} parentId={parentId} id={point}/>)
            }
        </div>
    );
};

export default React.memo(EntityPoints);