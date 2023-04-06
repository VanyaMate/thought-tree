import React, {useState} from 'react';
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './ToggleButton.module.scss';
import {IButton} from "../Button/Button";
import {IDefaultComponent} from "../../../IDefaultComponent";

export interface IToggleButton extends IDefaultComponent {
    status: boolean,
    onActive: () => void,
    onDisable: () => void
}

const ToggleButton: React.FC<IToggleButton> = (props) => {
    const [status, setStatus] = useState(props.status);

    const toggleHandle = function () {
        setStatus((p) => !p);
        props[status ? 'onActive' : 'onDisable']();
    }

    return (
        <ColorThemeContainer
            themeStyles={css}
            className={[css.button, props.className, status ? css.button_active : ''].join(' ')}
            onClick={toggleHandle}
        >
            <div className={[css.point, status ? css.point_active : ''].join(' ')}/>
        </ColorThemeContainer>
    );
};

export default React.memo(ToggleButton);