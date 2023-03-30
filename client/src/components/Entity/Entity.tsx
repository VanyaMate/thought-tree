import React, {useEffect, useRef, useState} from 'react';
import css from './Entity.module.scss';
import EntityCard from "./EntityCard/EntityCard";
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";
import EntityLine from "./EntityLine/EntityLine";

export interface IEntityData {
    id: string,
    title: string,
    text: string
}

export interface IEntity {
    data: IEntityData,
    points: IEntity[]
}

export interface IEntityComponent extends IEntity {
    parentCard?: React.RefObject<HTMLDivElement>,
    parentData?: IEntityData,
    root?: boolean
}

const Entity: React.FC<IEntityComponent> = (props) => {
    const card = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (card.current && props.parentCard?.current) {
            const cardPosition = card.current.getBoundingClientRect();
            const parentCardPosition = props.parentCard.current.getBoundingClientRect();
            const xDelta = cardPosition.left - parentCardPosition.left;

            setWidth(xDelta);
        }
    }, [])

    return (
        <ColorThemeContainer themeStyles={css} className={css.container}>
            <EntityLine width={width}/>
            <EntityCard {...props} ref={card} parentEntity={props.parentData} root={props.root}/>
            <div className={css.points}>
                {
                    props.points.map((point) => <Entity key={point.data.id} {...point} parentCard={card} parentData={props.data}/>)
                }
            </div>
        </ColorThemeContainer>
    );
};

export default React.memo(Entity);