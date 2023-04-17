import React from 'react';
import css from './SmallInfoPopup.module.scss';
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";

export interface ISmallInfoPopup {
    info: string,
    hidden: boolean,
}

const SmallInfoPopup: React.FC<ISmallInfoPopup> = (props) => {
    return (
        <ColorThemeContainer themeStyles={css} className={[css.container, props.hidden ? css.hidden : ''].join(' ')}>
            { props.info }
        </ColorThemeContainer>
    );
};

export default React.memo(SmallInfoPopup);