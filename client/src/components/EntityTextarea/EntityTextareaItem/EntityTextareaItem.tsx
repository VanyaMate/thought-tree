import React, {useEffect, useRef, useState} from 'react';
import css from './EntityTextareaItem.module.scss';

export interface IEntityTextareaItem {
    value: string,
}

const EntityTextareaItem: React.FC<IEntityTextareaItem> = (props) => {
    const textareaRef = useRef<HTMLDivElement>(null);

    return (
        <div
            contentEditable={true}
            suppressContentEditableWarning={true}
            className={css.container}
            ref={textareaRef}
        >
            { props.value }
        </div>
    );
};

export default EntityTextareaItem;