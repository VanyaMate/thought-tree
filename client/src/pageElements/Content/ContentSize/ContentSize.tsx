import React from 'react';
import {IDefaultComponent} from "../../../components/IDefaultComponent";
import css from './ContentSize.module.scss';

const ContentSize: React.FC<IDefaultComponent> = (props) => {
    const { className, ...other } = props;

    return (
        <div {...other} className={[css.container, className].join(' ')}/>
    );
};

export default React.memo(ContentSize);