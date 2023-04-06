import React from 'react';
import css from './Bottom.module.scss';
import ColorThemeContainer from "../../components/Themes/ColorThemeContainer/ColorThemeContainer";

const Bottom = () => {
    return (
        <ColorThemeContainer themeStyles={css} className={css.container}>
            <div className={css.content}>
                Bottom
            </div>
        </ColorThemeContainer>
    );
};

export default Bottom;