import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import css from './Button.module.scss';
import ThemeContainer from "../ThemeContainer/ThemeContainer";

export interface IButton extends IDefaultComponent {
    onClick: () => void
    active?: boolean
}

const Button: React.FC<IButton> = (props) => {
    const { className, active, ...other } = props;

    return (
        <ThemeContainer
            themeStyles={css}
            {...other}
            className={[css.button, active ? css.active : '', className].join(' ')}
        >
            { props.children }
        </ThemeContainer>
    );
};

export default React.memo(Button);