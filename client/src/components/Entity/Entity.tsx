import React from 'react';
import css from './Entity.module.scss';
import ThemeContainer from "../UI/Buttons/ThemeContainer/ThemeContainer";
import EntityCard from "./EntityCard/EntityCard";

export interface IEntityData {
    title: string,
    text: string
}

export interface IEntity {
    data: IEntityData,
    points: IEntity[]
}

const Entity: React.FC<IEntity> = (props) => {

    return (
        <ThemeContainer themeStyles={css} className={css.container}>
            <EntityCard {...props.data}/>
            <div className={css.points}>
                {
                    /**
                     *  TODO: Заменить index на point.id после создания DB
                     *  Потому что в будущем планируется добавить возможность изменять order
                     *  и чтобы предотвратить ререндер - нужно заменить index
                     * */
                    props.points.map((point, index) => <Entity key={index} {...point}/>)
                }
            </div>
        </ThemeContainer>
    );
};

export default Entity;