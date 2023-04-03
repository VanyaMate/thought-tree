import React from 'react';
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";
import css from "./SmallButton.module.scss";
import {IButton} from "../Button/Button";

const SmallButton: React.FC<IButton> = (props) => {
    const { className, active, ...other } = props;

    return (
        <ColorThemeContainer
            themeStyles={css}
            {...other}
            className={[css.button, active ? css.active : '', className].join(' ')}
        >
            { props.children }
        </ColorThemeContainer>
    );
};

export default SmallButton;