import React from 'react';
import css from "./EntityCard.module.scss";
import {generateString} from "../../../../../utils/methods";
import {rus} from "../../../../../utils/store.words";
import ThemeContainer from "../../UI/Buttons/ThemeContainer/ThemeContainer";
import {IEntityData} from "../Entity";

const EntityCard: React.FC<IEntityData> = (props) => {
    return (
        <ThemeContainer themeStyles={css} className={css.card} data-entity={'true'}>
            <h4 className={css.title}>{ props.title + generateString(rus, 1, 5) }</h4>
            <p className={css.text}>{ generateString(rus, 30, 250) }</p>
        </ThemeContainer>
    );
};

export default EntityCard;