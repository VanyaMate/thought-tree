import React from 'react';
import css from './Entity.module.scss';
import ThemeContainer from "../UI/Buttons/ThemeContainer/ThemeContainer";
import {generateString} from "../../../../utils/methods";
import {rus} from "../../../../utils/store.words";

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
                <h4>{ generateString(rus, 1, 5) }</h4>
                <p>{ generateString(rus, 30, 250) }</p>
            </div>
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