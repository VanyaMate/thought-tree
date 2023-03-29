import React, {useEffect, useRef} from 'react';
import css from './Entity.module.scss';
import EntityCard from "./EntityCard/EntityCard";
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";

export interface IEntityData {
    title: string,
    text: string
}

export interface IEntity {
    data: IEntityData,
    points: IEntity[]
}

export interface IEntityComponent {
    entity: IEntity,
    parentCard: HTMLDivElement | null
}

const Entity: React.FC<IEntityComponent> = (props) => {
    const card = useRef<HTMLDivElement>(null);

    return (
        <ColorThemeContainer themeStyles={css} className={css.container} ref={card}>
            <EntityCard {...props.entity.data}/>
            <div className={css.points}>
                {
                    /**
                     *  TODO: Заменить index на point.id после создания DB
                     *  Потому что в будущем планируется добавить возможность изменять order
                     *  и чтобы предотвратить ререндер - нужно заменить index
                     * */
                    props.entity.points.map((point, index) => <Entity key={index} entity={point} parentCard={card.current}/>)
                }
            </div>
        </ColorThemeContainer>
    );
};

export default Entity;