import React from 'react';
import css from './Content.module.scss';
import {IDefaultComponent} from "../../components/IDefaultComponent";
import ColorThemeContainer from "../../components/Themes/ColorThemeContainer/ColorThemeContainer";

const Content: React.FC<IDefaultComponent> = (props) => {
    const { className, ...other } = props;

    return (
        <ColorThemeContainer themeStyles={css} {...other} className={[css.container, className].join(' ')}/>
    );
};

export default Content;