import React, {ReactElement, useMemo, useState} from 'react';
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './EntityTextarea.module.scss';
import {IDefaultComponent} from "../IDefaultComponent";
import {useEntityTextareaHook} from "../../hooks/useEntityTextarea.hook";
import {EntityTextareaComponent} from "../../types/entityTextareaComponent";

export interface IEntityTextarea extends IDefaultComponent {
    value: string
}

const EntityTextarea: React.FC<IEntityTextarea> = React.forwardRef<HTMLDivElement, IEntityTextarea>((props: IEntityTextarea, ref) => {
    const result: ReactElement[] = useEntityTextareaHook(props.value);

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




// *CONTAINER*
// DIV -> ITEM'S

// *ITEM*
// DIV editable

/**
 *  CONTAINER
 *
 *  IF value === 'text'
 *      return ITEM (value)
 *  ELSE
 *      return CONTAINER (value)
 *
 */













