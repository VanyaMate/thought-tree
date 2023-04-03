import React from 'react';
import ThemeContainer from "../ThemeContainer/ThemeContainer";
import {IDefaultComponent} from "../../IDefaultComponent";
import {useMySelector} from "../../../hooks/redux.hook";

export interface IColorThemeContainer extends IDefaultComponent {
    themeStyles: { [key: string]: string },
}

const ColorThemeContainer: React.FC<IColorThemeContainer> = React.forwardRef<HTMLDivElement, IColorThemeContainer>((props, ref) => {
    const theme = useMySelector((state) => state.theme);

    return (
        <ThemeContainer {...props} theme={{ type: theme.type }} ref={ref}/>
    );
});

export default React.memo(ColorThemeContainer);