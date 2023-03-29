import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import {useMySelector} from "../../../../hooks/redux.hook";

export interface IThemeContainer extends IDefaultComponent {
    themeStyles: { [key: string]: string },
}

const ThemeContainer: React.FC<IThemeContainer> = React.forwardRef((props, ref) => {
    const theme = useMySelector(state => state.theme);
    const { className, themeStyles, ...other } = props;

    return (
        <div className={[className, themeStyles[theme.type] || themeStyles['dark']].join(' ')} ref={ref} {...other}/>
    );
});

export default React.memo(ThemeContainer);