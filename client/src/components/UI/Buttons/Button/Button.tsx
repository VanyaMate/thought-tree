import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import css from './Button.module.scss';

export interface IButton extends IDefaultComponent{
    label: string,
    onClick: () => void
    active?: boolean
}

const Button: React.FC<IButton> = (props) => {
    const { label, className, active, ...other } = props;

    return (
        <button {...other} className={[css.button, active ? css.active : '', className].join(' ')}>
            { label }
        </button>
    );
};

export default Button;