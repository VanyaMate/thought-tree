import React from 'react';
import css from './Bottom.module.scss';
import ThemeContainer from "../../components/UI/Buttons/ThemeContainer/ThemeContainer";

const Bottom = () => {
    return (
        <ThemeContainer themeStyles={css} className={css.container}>
            Bottom
        </ThemeContainer>
    );
};

export default Bottom;