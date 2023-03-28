import React from 'react';
import ThemeContainer from "../UI/Buttons/ThemeContainer/ThemeContainer";
import css from './MouseScrollContainer.module.scss';

const MouseScrollContainer = () => {
    return (
        <ThemeContainer light={css.light} dark={css.dark} className={css.content}>
            Theme
        </ThemeContainer>
    );
};

export default MouseScrollContainer;