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
            <Button onClick={() => toggleTheme()} active>Изменить тему сайта</Button>
            <Button onClick={() => setPlaygroundTheme(PlaygroundTheme.BLOCKS)} active>Blocks Playground Type</Button>
            <Button onClick={() => setPlaygroundTheme(PlaygroundTheme.THREE)} active>Three Playground Type</Button>
        </ColorThemeContainer>
    );
};

export default Header;