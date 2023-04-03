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

    const test_text = `text start (&-){"value":"component (&-){\\"value\\":\\"inside (&-){\\\\\\"value\\\\\\":\\\\\\"last\\\\\\",\\\\\\"type\\\\\\":\\\\\\"2\\\\\\",\\\\\\"data\\\\\\":{\\\\\\"entityId\\\\\\":\\\\\\"uid3\\\\\\"}}(-&)\\",\\"type\\":\\"3\\",\\"data\\":null}(-&)","type":"0","data":null}(-&) text end`;
    const test_text2 = `text start (&-){"value":"comp(&-){\\"value\\":\\"string\\",\\"type\\":\\"2\\",\\"data\\":{\\"entityId\\":\\"id4\\"}}(-&)onasd ent (&-){\\"value\\":\\"inside (&-){\\\\\\"value\\\\\\":\\\\\\"last\\\\\\",\\\\\\"type\\\\\\":\\\\\\"2\\\\\\",\\\\\\"data\\\\\\":{\\\\\\"entityId\\\\\\":\\\\\\"uid3\\\\\\"}}(-&)\\",\\"type\\":\\"3\\",\\"data\\":null}(-&)","type":"0","data":null}(-&) text end`;

    const entityTextarea = useRef<HTMLDivElement>(null)

    const generateAndLog = function (element: HTMLElement) {
        console.log('%cИз', 'font-size: 20px; color: red');
        console.log(test_text2);
        const formattedString = getFormattedEntityTextareaString(element);
        console.log('%cВ', 'font-size: 20px; color: green');
        console.log(formattedString);
        console.log(`%cСтроки ${test_text2 === formattedString ? '' : 'не '}равны`, `color: ${test_text2 === formattedString ? 'green' : 'red'}`)
    }

    return (
        <ColorThemeContainer themeStyles={css} className={css.container} data-entity={'true'}>
            CreateEntity
            <h4>-- title input --</h4>
            <EntityTextarea value={test_text2} ref={entityTextarea}/>
            <Button active onClick={() => generateAndLog(entityTextarea.current!)}>Generate</Button>
        </ColorThemeContainer>
    );
};

export default CreateEntity;