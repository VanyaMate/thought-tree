import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import {useMySelector} from "../../../../hooks/redux.hook";
import {Theme} from "../../../../store/theme/theme.slice";

export interface IThemeContainer extends IDefaultComponent {
    light: string,
    dark: string
}

const ThemeContainer: React.FC<IThemeContainer> = (props) => {
    const theme = useMySelector(state => state.theme);
    const { className, light, dark, ...other } = props;

    return (
        <div className={[className, theme.type === Theme.LIGHT ? light : dark].join(' ')} {...other}/>
    );
};

export default ThemeContainer;