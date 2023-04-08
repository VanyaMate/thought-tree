import React from 'react';
import css from './Gui.module.scss';
import {IDefaultComponent} from "../../components/IDefaultComponent";

export interface IGui extends IDefaultComponent {}

const Gui: React.FC<IGui> = (props) => {
    return (
        <div className={css.container}>
            { props.children }
        </div>
    );
};

export default React.memo(Gui);