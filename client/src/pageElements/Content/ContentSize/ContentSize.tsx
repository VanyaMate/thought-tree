import React from 'react';
import {IDefaultComponent} from "../../../components/IDefaultComponent";
import css from './ContentSize.module.scss';
import ColorThemeContainer from "../../../components/Themes/ColorThemeContainer/ColorThemeContainer";

const ContentSize: React.FC<IDefaultComponent> = (props) => {
    const { className, ...other } = props;

    return (
        <ColorThemeContainer themeStyles={css} {...other} className={[css.container, className].join(' ')}/>
    );
};

export default React.memo(ContentSize);