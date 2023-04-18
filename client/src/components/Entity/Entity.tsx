import React, {useEffect, useRef, useState} from 'react';
import css from './Entity.module.scss';
import EntityCard from "./EntityCard/EntityCard";
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";
import EntityLine from "./EntityLine/EntityLine";
import {useMySelector} from "../../hooks/redux.hook";

export interface IEntityData {
    id: number,
    title: string,
    text: string,
    likesAmount: number,
    showsCount: number,
    author: string,
    createdAt?: string,
    updatedAt?: string,
}

export interface IEntity {
    data: IEntityData,
    points: IEntity[]
}

export interface IEntityComponent {
    parentCard?: React.RefObject<HTMLDivElement>,
    parentId?: number,
    id: number,
    root?: boolean
}

const Entity: React.FC<IEntityComponent> = (props) => {
    const card = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const entities = useMySelector((state) => state.entities);
    const current = entities.entityTrees[props.id];

    console.log(props.root, props.id);

    useEffect(() => {
        if (card.current && props.parentCard?.current) {
            const cardPosition = card.current.getBoundingClientRect();
            const parentCardPosition = props.parentCard.current.getBoundingClientRect();
            const xDelta = cardPosition.left - parentCardPosition.left;

            setWidth(xDelta);
        }
    }, [entities.entityTrees[props.parentId || -1]])

    if (!current) {
        return <></>
    }

    return (
        <ColorThemeContainer themeStyles={css} className={css.container}>
            <EntityLine width={width}/>
            <EntityCard {...props} ref={card} parentId={props.parentId} id={props.id} root={props.root}/>
            <div className={css.points}>
                {
                    current.points.map((point) => <Entity key={point} parentCard={card} parentId={props.id} id={point}/>)
                }
            </div>
        </ColorThemeContainer>
    );
};

export default React.memo(Entity);