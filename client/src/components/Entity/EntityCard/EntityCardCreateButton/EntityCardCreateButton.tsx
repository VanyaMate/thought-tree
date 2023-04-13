import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './EntityCardCreateButton.module.scss';
import Button from "../../../UI/Buttons/Button/Button";

export interface IEntityCardCreateButton extends IDefaultComponent {
    hidden: boolean,
}

const EntityCardCreateButton: React.FC<IEntityCardCreateButton> = (props) => {
    return (
        <ColorThemeContainer
            themeStyles={css}
            className={[css.container, props.hidden ? css.hidden : ''].join(' ')}
        >
            <Button className={css.button} active onClick={() => {}}>+</Button>
        </ColorThemeContainer>
    );
};

export default EntityCardCreateButton;