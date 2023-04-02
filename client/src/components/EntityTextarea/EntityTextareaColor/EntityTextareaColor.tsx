import React, {ReactElement} from 'react';
import css from './ EntityTextareColor.module.scss';
import {useEntityTextareaHook} from "../../../hooks/useEntityTextarea.hook";
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import {IDefaultComponent} from "../../IDefaultComponent";
import {EntityTextareaComponent} from "../../../types/entityTextareaComponent";

export interface IEntityTextareaColor extends IDefaultComponent {
    value: string,
    color: string
}

const EntityTextareaColor: React.FC<IEntityTextareaColor> = (props) => {
    const result: ReactElement[] = useEntityTextareaHook(props.value);

    return (
        <ColorThemeContainer
            themeStyles={css}
            className={[css.container, props.className ?? ''].join(' ')}
            style={{ background: props.color }}
            data-entity-type={EntityTextareaComponent.COLOR}
        >
            { result }
        </ColorThemeContainer>
    );
};

export default EntityTextareaColor;