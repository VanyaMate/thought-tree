import React, {useEffect, useMemo, useRef, useState} from 'react';
import css from './EntityTextareaItem.module.scss';
import {EntityTextareaComponent} from "../../../../types/entityTextareaComponent";
import {useActions, useMySelector} from "../../../../hooks/redux.hook";

export interface IEntityTextareaItem {
    value: string,
    id: number,
    onValueChange?: (id: number, text: string) => void
}

const EntityTextareaItem: React.FC<IEntityTextareaItem> = (props) => {
    const entities = useMySelector((state) => state.entities);
    const textareaRef = useRef<HTMLDivElement>(null);
    const redactMode = entities.entityTrees[props.id].redactMode;
    const { updateEntityRedactData } = useActions();
    const [text, setText] = useState(props.value);

    return (
        <div
            contentEditable={redactMode}
            suppressContentEditableWarning={true}
            className={[css.container, redactMode ? css.redactMode : ''].join(' ')}
            ref={textareaRef}
            data-entity-item={true}
            onSelect={(e) => {
                const selectedText: Selection | null = window.getSelection();
                if (selectedText) {
                    const start = selectedText.anchorOffset;
                    const end = selectedText.focusOffset;
                    const node = selectedText.anchorNode;

                    const previousText = node!.textContent!.substring(0, start);
                    const endText = node!.textContent!.substring(end, node!.textContent!.length - 1);
                    const insideText = node!.textContent!.slice(start, end);

                    const data = JSON.stringify({
                        type: EntityTextareaComponent.SCROLL_BUTTON,
                        value: insideText,
                        data: {
                            entityId: entities.rootId
                        }
                    })

                    const text = `${ previousText }(&-)${ data }(-&)${ endText }`;
                    updateEntityRedactData({ entityId: props.id, data: { text }});

                    const mouseEvent = (e.nativeEvent as MouseEvent);
                    console.log(mouseEvent.screenX, mouseEvent.screenY);
                    console.log(node!.textContent!.slice(start, end))
                }
            }}
            onInput={(e) => {
                props.onValueChange ? props.onValueChange(props.id, (e.target as HTMLDivElement).innerHTML!) : ''
            }}
            dangerouslySetInnerHTML={{__html: text.replace(/\n/g, '<br>')}}
        />
    );
};

export default EntityTextareaItem;