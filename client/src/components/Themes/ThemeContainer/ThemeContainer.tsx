import React from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import {ITheme} from "../../../store/theme/theme.slice";

export interface IThemeContainer extends IDefaultComponent {
    themeStyles: { [key: string]: string },
    theme: ITheme
}

const ThemeContainer: React.FC<IThemeContainer> = React.forwardRef((props, ref) => {
    const { className, themeStyles, theme, ...other } = props;

    return (
        <div className={[className, themeStyles[theme.type]].join(' ')} ref={ref} {...other}/>
    );
});

export default React.memo(ThemeContainer);