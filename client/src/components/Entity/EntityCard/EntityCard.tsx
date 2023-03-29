import React from 'react';
import css from "./EntityCard.module.scss";
import {generateString} from "../../../../../utils/methods";
import {rus} from "../../../../../utils/store.words";
import {IEntity, IEntityData} from "../Entity";
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import PlaygroundThemeContainer from "../../Themes/PlaygroundThemeContainer/PlaygroundThemeContainer";

export interface IEntityCard extends IEntityData {
    ref?: any
}

const EntityCard: React.FC<IEntityCard> = React.forwardRef((props, ref) => {
    return (
        <PlaygroundThemeContainer themeStyles={css} className={css.cardType} data-entity={'true'} ref={ref}>
            <ColorThemeContainer themeStyles={css} className={css.card}>
                <h4 className={css.title}>{ props.title + generateString(rus, 1, 5) }</h4>
                <p className={css.text}>{ generateString(rus, 30, 250) }</p>
            </ColorThemeContainer>
        </PlaygroundThemeContainer>
    );
});

export default React.memo(EntityCard);