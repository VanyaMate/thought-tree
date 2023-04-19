import React, {ReactElement} from 'react';
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './EntityTextarea.module.scss';
import {IDefaultComponent} from "../../IDefaultComponent";
import {useEntityTextareaHook} from "../../../hooks/useEntityTextarea.hook";
import {EntityTextareaComponent} from "../../../types/entityTextareaComponent";

export interface IEntityTextarea extends IDefaultComponent {
    value: string,
    entityId: number,
    onValueChange?: (type: string) => (id: number, value: string) => void,
    changeType?: string,
}

const EntityTextarea: React.FC<IEntityTextarea> = React.forwardRef<HTMLDivElement, IEntityTextarea>((props: IEntityTextarea, ref) => {
    const onValueChange = props.onValueChange ? props.onValueChange(props.changeType || 'title') : (id: number, value: string) => ({});
    const result: ReactElement[] = useEntityTextareaHook(props.value, props.entityId, onValueChange);

    return (
        <ColorThemeContainer
            themeStyles={css}
            className={[css.container, props.className ?? ''].join(' ')}
            data-entity-type={EntityTextareaComponent.DEFAULT}
            ref={ref}
        >
            { result }
        </ColorThemeContainer>
    );
});

export default React.memo(EntityTextarea);













