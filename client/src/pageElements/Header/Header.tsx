import React from 'react';
import css from './Header.module.scss';
import {useActions, useMySelector} from "../../hooks/redux.hook";
import ColorThemeContainer from "../../components/Themes/ColorThemeContainer/ColorThemeContainer";
import {Link} from "react-router-dom";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import ToggleTheme from "../../components/Buttons/ToggleTheme/ToggleTheme";

const Header = () => {
    const auth = useMySelector((state) => state.auth);

    return (
        <ColorThemeContainer themeStyles={css} className={css.container}>
            <div className={css.content}>
                <div className={css.content_left}>
                    <div className={css.logo}>
                        <Link to={'/'} className={css.link}>Thought Tree</Link>
                    </div>
                </div>
                <div className={css.content_right}>
                    <ToggleTheme/>
                    {
                        auth.bearer ? <HeaderProfile/> : <HeaderLogin/>
                    }
                </div>
            </div>
        </ColorThemeContainer>
    );
};

export default Header;