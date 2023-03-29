import React from 'react';
import ThemeContainer from "../ThemeContainer/ThemeContainer";
import {IDefaultComponent} from "../../IDefaultComponent";
import {useMySelector} from "../../../hooks/redux.hook";

export interface IPlaygroundThemeContainer extends IDefaultComponent {
    themeStyles: { [key: string]: string },
}

const PlaygroundThemeContainer: React.FC<IPlaygroundThemeContainer> = React.forwardRef((props, ref) => {
    const playground = useMySelector((state) => state.playground);

    return (
        <ThemeContainer {...props} theme={{ type: playground.theme }} ref={ref}/>
    );
});

export default React.memo(PlaygroundThemeContainer);