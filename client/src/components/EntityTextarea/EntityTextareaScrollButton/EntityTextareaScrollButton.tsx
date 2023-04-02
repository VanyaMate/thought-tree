import React, {ReactElement} from 'react';
import css from './EntityTextareaScrollButton.module.scss';
import {useEntityTextareaHook} from "../../../hooks/useEntityTextarea.hook";
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import {IDefaultComponent} from "../../IDefaultComponent";
import ScrollToEntityButton from "../../Buttons/ScrollToEntityButton/ScrollToEntityButton";

export interface IEntityTextareaScrollButton extends IDefaultComponent {
    value: string,
    entityId: string
}

const EntityTextareaScrollButton: React.FC<IEntityTextareaScrollButton> = (props) => {
    const result: ReactElement[] = useEntityTextareaHook(props.value);

    return (
        <ColorThemeContainer themeStyles={css} className={[css.container, props.className ?? ''].join(' ')}>
            <ScrollToEntityButton entityId={props.entityId}>
                { result }
            </ScrollToEntityButton>
        </ColorThemeContainer>
    );
};

export default EntityTextareaScrollButton;