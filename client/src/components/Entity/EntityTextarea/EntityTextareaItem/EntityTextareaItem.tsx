import React, {useEffect, useRef, useState} from 'react';
import css from './EntityTextareaItem.module.scss';
import {EntityTextareaComponent} from "../../../../types/entityTextareaComponent";
import {useMySelector} from "../../../../hooks/redux.hook";

export interface IEntityTextareaItem {
    value: string,
    id: number,
    onValueChange?: (text: string) => void
}

const EntityTextareaItem: React.FC<IEntityTextareaItem> = (props) => {
    const entities = useMySelector((state) => state.entities);
    const textareaRef = useRef<HTMLDivElement>(null);

    return (
        <div
            contentEditable={entities.entityTrees[props.id].redactMode}
            suppressContentEditableWarning={true}
            className={css.container}
            ref={textareaRef}
            data-entity-item={true}
            onSelect={(e) => {
                const selectedText: Selection | null = window.getSelection();
                if (selectedText) {
                    const start = selectedText.anchorOffset;
                    const end = selectedText.focusOffset;
                    const node = selectedText.anchorNode;

                    console.log(node!.textContent!.slice(start, end))
                }
            }}
            onInput={(e) => props.onValueChange ? props.onValueChange((e.target as HTMLDivElement).textContent!) : ''}
        >
            { props.value }
        </div>
    );
};

export default EntityTextareaItem;