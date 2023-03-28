import React, {useCallback, useEffect, useState} from 'react';
import ThemeContainer from "../UI/Buttons/ThemeContainer/ThemeContainer";
import css from './PlaygroundScrollContainer.module.scss';
import Button from "../UI/Buttons/Button/Button";
import {IDefaultComponent} from "../IDefaultComponent";
import {useActions, useMySelector} from "../../hooks/redux.hook";

const PlaygroundScrollContainer: React.FC<IDefaultComponent> = (props) => {
    const playground = useMySelector(state => state.playground);
    const {
        setPlaygroundMouseCoords,
        setPlaygroundMouseStartCoords,
        setPlaygroundCoordsToCurrent,
        setScrolled
    } = useActions();

    useEffect(() => {
        window.addEventListener('mousedown', onMouseDown);

        if (playground.scrolled) {
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('mousemove', onMouseMove);
        }

        return () => {
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [playground.scrolled])

    const onMouseDown = useCallback((e: MouseEvent) => {
        if (e.button === 0) {
            setScrolled(true);
            setPlaygroundMouseStartCoords({ x: e.clientX, y: e.clientY })
        }
    }, [])

    const onMouseUp = useCallback((e: MouseEvent) => {
        if (e.button === 0) {
            setScrolled(false);
            setPlaygroundCoordsToCurrent();
        }
    }, [])

    const onMouseMove = useCallback((e: MouseEvent) => {
        setPlaygroundMouseCoords({ x: e.clientX, y: e.clientY })
    }, [])

    return (
        <ThemeContainer
            themeStyles={css}
            className={css.content}
        >
            Content
        </ThemeContainer>
    );
};

export default React.memo(PlaygroundScrollContainer);