import React from 'react';
import css from "./EntityCard.module.scss";
import {generateString} from "../../../../../utils/methods";
import {rus} from "../../../../../utils/store.words";
import {IEntityData} from "../Entity";
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import PlaygroundThemeContainer from "../../Themes/PlaygroundThemeContainer/PlaygroundThemeContainer";

const EntityCard: React.FC<IEntityData> = (props) => {
    return (
        <PlaygroundThemeContainer themeStyles={css} className={css.cardType} data-entity={'true'}>
            <ColorThemeContainer themeStyles={css} className={css.card}>
                <h4 className={css.title}>{ props.title + generateString(rus, 1, 5) }</h4>
                <p className={css.text}>{ generateString(rus, 30, 250) }</p>
            </ColorThemeContainer>
        </PlaygroundThemeContainer>
    );
};

export default EntityCard;