import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import css from './Button.module.scss';
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";

export interface IButton extends IDefaultComponent {
    onClick: () => void
    active?: boolean,
    always?: boolean,
    activeStyle?: string,
    alwaysStyle?: string,
}

const Button: React.FC<IButton> = (props) => {
    const { className, active, always, activeStyle, alwaysStyle, ...other } = props;

    return (
        <ColorThemeContainer
            themeStyles={css}
            {...other}
            className={[
                css.button,
                active ? [css.active, activeStyle].join(' ') : '',
                always ? [css.always, alwaysStyle].join(' ') : '',
                className
            ].join(' ')}
        >
            { props.children }
        </ColorThemeContainer>
    );
};

export default React.memo(Button);