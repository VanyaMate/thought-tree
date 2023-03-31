import React, {useEffect, useRef, useState} from 'react';
import css from './EntityTextareaItem.module.scss';

export interface IEntityTextareaItem {
    value: string,

}

const EntityTextareaItem: React.FC<IEntityTextareaItem> = (props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState<string>('');
    const autoResize = function () {
        if (textareaRef.current) {
            textareaRef.current!.style.height = textareaRef.current!.rows * 10 + 'px';
            textareaRef.current!.style.width = textareaRef.current!.cols * 3 + 'px';
        }
    }

    useEffect(() => {
        autoResize();
    }, [text])

    return (
        <textarea className={css.container} ref={textareaRef}>
            { props.value }
        </textarea>
    );
};

export default EntityTextareaItem;