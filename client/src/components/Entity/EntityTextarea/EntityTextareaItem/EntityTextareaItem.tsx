import React, {useEffect, useRef, useState} from 'react';
import css from './EntityTextareaItem.module.scss';
import {EntityTextareaComponent} from "../../../../types/entityTextareaComponent";
import {useMySelector} from "../../../../hooks/redux.hook";

export interface IEntityTextareaItem {
    value: string,
}

const EntityTextareaItem: React.FC<IEntityTextareaItem> = (props) => {
    const entities = useMySelector((state) => state.entities);
    const textareaRef = useRef<HTMLDivElement>(null);

    return (
        <div
            contentEditable={entities.redactMode}
            suppressContentEditableWarning={true}
            className={css.container}
            ref={textareaRef}
            data-entity-item={true}
            onSelect={(e) => {
                console.log('Synt event', e);
                const selectedText: Selection | null = window.getSelection();
                console.log('SelecText', selectedText);
                if (selectedText) {
                    const start = selectedText.anchorOffset;
                    const end = selectedText.focusOffset;
                    const node = selectedText.anchorNode;

                    console.log(node!.textContent!.slice(start, end))
                }
            }}
        >
            { props.value }
        </div>
    );
};

export default EntityTextareaItem;