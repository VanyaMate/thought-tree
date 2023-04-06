import React from 'react';
import {useActions, useMySelector} from "../../../hooks/redux.hook";
import {ColorTheme} from "../../../types/variations.themes";
import ToggleButton from "../../UI/Buttons/ToggleButton/ToggleButton";

const ToggleTheme = () => {
    const theme = useMySelector((state) => state.theme);
    const {toggleTheme} = useActions();

    return (
        <ToggleButton
            status={theme.type === ColorTheme.DARK}
            onActive={() => toggleTheme()}
            onDisable={() => toggleTheme()}
        />
    );
};

export default ToggleTheme;