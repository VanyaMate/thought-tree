import React, {useCallback, useEffect, useState} from 'react';
import ThemeContainer from "../UI/Buttons/ThemeContainer/ThemeContainer";
import css from './PlaygroundScrollContainer.module.scss';
import Button from "../UI/Buttons/Button/Button";
import {IDefaultComponent} from "../IDefaultComponent";
import {useActions, useMySelector} from "../../hooks/redux.hook";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

const PlaygroundScrollContainer: React.FC<IDefaultComponent> = (props) => {
    const playground = useMySelector(state => state.playground);
    const {
        setPlaygroundCoords,
        setPlaygroundMouseCoords,
        setPlaygroundMouseStartCoords,
        setPlaygroundScrolled,
    } = useActions();

    const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (e.button === 0) {
            setPlaygroundScrolled(true);
            setPlaygroundMouseStartCoords({ x: e.clientX, y: e.clientY })
        }
    }, [])

    const onMouseUp = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (e.button === 0) {
            setPlaygroundScrolled(false);
            setPlaygroundCoords({
                x: ((e.target as HTMLDivElement).parentNode as HTMLDivElement).scrollLeft,
                y: ((e.target as HTMLDivElement).parentNode as HTMLDivElement).scrollTop
            })
        }
    }, [playground.currentCoords])

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (playground.scrolled) {
            setPlaygroundMouseCoords({x: e.clientX, y: e.clientY})
        }
    }, [playground.scrolled])

    return (
        <ThemeContainer
            themeStyles={css}
            className={css.content}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
        >
            Content
        </ThemeContainer>
    );
};

export default React.memo(PlaygroundScrollContainer);