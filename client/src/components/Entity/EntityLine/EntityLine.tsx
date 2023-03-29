import React from 'react';
import css from './EntityLine.module.scss';

export interface IEntityLine {
    width: number
}

const EntityLine: React.FC<IEntityLine> = (props) => {
    return (
        <div style={{ width: Math.abs(props.width) }} className={[css.container, props.width > 0 ? css.right : css.left].join(' ')}/>
    );
};

export default EntityLine;