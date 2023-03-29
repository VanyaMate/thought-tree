import React from 'react';
import css from './Entity.module.scss';
import ThemeContainer from "../UI/Buttons/ThemeContainer/ThemeContainer";

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
            <div className={css.card} data-entity={'true'}>
                <h4>{ props.data.title }</h4>
                <p>{ props.data.text }</p>
            </div>
            <div className={css.points}>
                {
                    props.points.map((point, index) => <Entity key={index} {...point}/>)
                }
            </div>
        </ThemeContainer>
    );
};

export default Entity;