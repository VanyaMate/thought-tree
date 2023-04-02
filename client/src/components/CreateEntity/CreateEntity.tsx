import React from 'react';
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './CreateEntity.module.scss';
import EntityTextarea from "../EntityTextarea/EntityTextarea";
import {EntityTextareaComponent} from "../../types/entityTextareaComponent";

const CreateEntity = () => {
    const last = JSON.stringify({value: 'last', type: EntityTextareaComponent.SCROLL_BUTTON, entityId: 'uid3'})
    const inside = JSON.stringify({value: `inside (&-)${last}(-&)`, type: EntityTextareaComponent.COLOR, color: 'red'})
    const component = JSON.stringify({value: `component (&-)${inside}(-&)`, type: EntityTextareaComponent.DEFAULT})

    const text = `text start (&-)${component}(-&) text end`;

    return (
        <ColorThemeContainer themeStyles={css} className={css.container} data-entity={'true'}>
            CreateEntity
            <h4>-- title input --</h4>
            <EntityTextarea value={text}/>
        </ColorThemeContainer>
    );
};

export default CreateEntity;