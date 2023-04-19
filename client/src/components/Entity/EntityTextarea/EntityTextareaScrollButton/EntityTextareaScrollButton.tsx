import React, {ReactElement} from 'react';
import css from './EntityTextareaScrollButton.module.scss';
import {useEntityTextareaHook} from "../../../../hooks/useEntityTextarea.hook";
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";
import {IDefaultComponent} from "../../../IDefaultComponent";
import ScrollToEntityButton from "../../../Buttons/ScrollToEntityButton/ScrollToEntityButton";
import {EntityTextareaComponent} from "../../../../types/entityTextareaComponent";

export interface IEntityTextareaScrollButton extends IDefaultComponent {
    value: string,
    entityId: string,
    data: {
        entityId: number
    }
}

const EntityTextareaScrollButton: React.FC<IEntityTextareaScrollButton> = (props) => {
    const result: ReactElement[] = useEntityTextareaHook(props.value, props.data.entityId);

    return (
        <ColorThemeContainer
            themeStyles={css}
            className={[css.container, props.className ?? ''].join(' ')}
            data-entity-type={EntityTextareaComponent.SCROLL_BUTTON}
            data-entity-data={`{"entityId": "${props.data.entityId}"}`}
        >
            <ScrollToEntityButton entityId={props.data.entityId}>
                { result }
            </ScrollToEntityButton>
        </ColorThemeContainer>
    );
};

export default EntityTextareaScrollButton;