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
    const { entityTrees } = useMySelector((state) => state.entities);
    const current = entityTrees[props.id];
    const { parentCard, parentId, id, root } = props;

    useEffect(() => {
        if (card.current && parentCard?.current) {
            const cardPosition = card.current.getBoundingClientRect();
            const parentCardPosition = parentCard.current.getBoundingClientRect();
            const xDelta = cardPosition.left - parentCardPosition.left;

            setWidth(xDelta);
        }
    }, [entityTrees[parentId || -1]])

    if (!current) {
        return <></>;
    }

    return (
        <ColorThemeContainer themeStyles={css} className={css.container}>
            <EntityLine width={width}/>
            <EntityCard ref={card} parentId={parentId} id={id} root={root}/>
            <div className={css.points}>
                {
                    current.points.map((point) => <Entity key={point} parentCard={card} parentId={id} id={point}/>)
                }
            </div>
        </ColorThemeContainer>
    );
};

export default React.memo(Entity);