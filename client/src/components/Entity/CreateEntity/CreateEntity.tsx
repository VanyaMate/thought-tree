import React, {useEffect, useRef} from 'react';
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './CreateEntity.module.scss';
import EntityTextarea from "../EntityTextarea/EntityTextarea";
import {EntityTextareaComponent} from "../../../types/entityTextareaComponent";
import {getFormattedEntityTextareaString} from "../../../../utils/entities/getFormattedEntityTextareaString";
import Button from "../../UI/Buttons/Button/Button";

const CreateEntity = () => {
    const entityTextarea = useRef<HTMLDivElement>(null)

    const generateAndLog = function (element: HTMLElement) {
        const formattedString = getFormattedEntityTextareaString(element);
    }

    return (
        <ColorThemeContainer themeStyles={css} className={css.container} data-entity={'true'}>
            CreateEntity
            <h4>-- title input --</h4>
            <EntityTextarea value={''} ref={entityTextarea}/>
            <Button active onClick={() => generateAndLog(entityTextarea.current!)}>Generate</Button>
        </ColorThemeContainer>
    );
};

export default CreateEntity;