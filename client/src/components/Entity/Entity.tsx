import React, {useEffect, useRef, useState} from 'react';
import css from './Entity.module.scss';
import EntityCard from "./EntityCard/EntityCard";
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";
import EntityLine from "./EntityLine/EntityLine";

export interface IEntityData {
    title: string,
    text: string
}

export interface IEntity {
    data: IEntityData,
    points: IEntity[]
}

export interface IEntityComponent extends IEntity {
    parentCard?: React.RefObject<HTMLDivElement>
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
            <EntityCard {...props.data} ref={card}/>
            <div className={css.points}>
                {
                    /**
                     *  TODO: Заменить index на point.id после создания DB
                     *  Потому что в будущем планируется добавить возможность изменять order
                     *  и чтобы предотвратить ререндер - нужно заменить index
                     * */
                    props.points.map((point, index) => <Entity key={index} {...point} parentCard={card}/>)
                }
            </div>
        </ColorThemeContainer>
    );
};

export default React.memo(Entity);