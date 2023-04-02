import React, {useEffect, useRef} from 'react';
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './CreateEntity.module.scss';
import EntityTextarea from "../EntityTextarea/EntityTextarea";
import {EntityTextareaComponent} from "../../types/entityTextareaComponent";
import {getFormattedEntityTextareaString} from "../../../utils/entities/getFormattedEntityTextareaString";
import Button from "../UI/Buttons/Button/Button";

const CreateEntity = () => {
    const last = JSON.stringify({value: 'last', type: EntityTextareaComponent.SCROLL_BUTTON, entityId: 'uid3'})
    const inside = JSON.stringify({value: `inside (&-)${last}(-&)`, type: EntityTextareaComponent.COLOR, color: 'red'})
    const component = JSON.stringify({value: `component (&-)${inside}(-&)`, type: EntityTextareaComponent.DEFAULT})

    const text = `text start (&-)${component}(-&) text end`;

    const entityTextarea = useRef<HTMLDivElement>(null)

    const generateAndLog = function (element: HTMLElement) {
        console.log('%cИз', 'font-size: 20px; color: red');
        console.log(text);
        const formattedString = getFormattedEntityTextareaString(element);
        console.log('%cВ', 'font-size: 20px; color: green');
        console.log(formattedString);
        console.log('%cСтроки равны', `color: ${text === formattedString ? 'green' : 'red'}`)
    }

    return (
        <ColorThemeContainer themeStyles={css} className={css.container} data-entity={'true'}>
            CreateEntity
            <h4>-- title input --</h4>
            <EntityTextarea value={text} ref={entityTextarea}/>
            <Button active onClick={() => generateAndLog(entityTextarea.current!)}>Generate</Button>
        </ColorThemeContainer>
    );
};

export default CreateEntity;