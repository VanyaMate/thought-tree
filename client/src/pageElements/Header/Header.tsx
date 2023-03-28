import React from 'react';
import css from './Header.module.scss';
import {useActions, useMySelector} from "../../hooks/redux.hook";
import Button from "../../components/UI/Buttons/Button/Button";
import ThemeContainer from "../../components/UI/Buttons/ThemeContainer/ThemeContainer";

const Header = () => {
    const { toggleTheme } = useActions();

    return (
        <ThemeContainer themeStyles={css} className={css.container}>
            Header
            <Button onClick={() => toggleTheme()} active>Изменить</Button>
        </ThemeContainer>
    );
};

export default Header;