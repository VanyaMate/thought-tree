import React from 'react';
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './CommonContainer.module.scss';
import {IDefaultComponent} from "../../IDefaultComponent";

const CommonContainer: React.FC<IDefaultComponent> = (props) => {
    const { className, ...other } = props;

    return (
        <ColorThemeContainer themeStyles={css} className={[css.container, className].join(' ')} {...other}/>
    );
};

export default React.memo(CommonContainer);