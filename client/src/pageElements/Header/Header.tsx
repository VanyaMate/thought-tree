import React from 'react';
import css from './Header.module.scss';
import {useActions} from "../../hooks/redux.hook";
import Button from "../../components/UI/Buttons/Button/Button";
import ColorThemeContainer from "../../components/Themes/ColorThemeContainer/ColorThemeContainer";
import {PlaygroundTheme} from "../../types/variations.themes";

const Header = () => {
    const { toggleTheme, setPlaygroundTheme } = useActions();

    return (
        <ColorThemeContainer themeStyles={css} className={css.container}>
            Header
            <Button onClick={() => toggleTheme()} active>Изменить</Button>
            <Button onClick={() => setPlaygroundTheme(PlaygroundTheme.WIDTH)} active>WidthType</Button>
            <Button onClick={() => setPlaygroundTheme(PlaygroundTheme.PARTS)} active>PartsType</Button>
        </ColorThemeContainer>
    );
};

export default Header;