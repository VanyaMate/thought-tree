import React, {useCallback, useEffect, useRef, useState} from 'react';
import ThemeContainer from "../UI/Buttons/ThemeContainer/ThemeContainer";
import css from './PlaygroundScrollContainer.module.scss';
import {IDefaultComponent} from "../IDefaultComponent";
import {useActions, useMySelector} from "../../hooks/redux.hook";

const PlaygroundScrollContainer: React.FC<IDefaultComponent> = (props) => {
    const container = useRef<HTMLDivElement>(null);
    const playground = useMySelector(state => state.playground);
    const {
        setPlaygroundCoords,
        setPlaygroundMouseCoords,
        setPlaygroundMouseStartCoords,
        setPlaygroundScrolled,
    } = useActions();

    const isEntity = function (target: HTMLDivElement): boolean {
        let currentElement: HTMLDivElement = target;

        while ((currentElement.parentNode as HTMLDivElement).tagName !== 'BODY') {
            const parent: HTMLDivElement = currentElement.parentNode as HTMLDivElement;

            if (parent.getAttribute('data-entity')) {
                return true;
            }

            currentElement = parent;
        }

        return false;
    }

    const isPlaygroundPlace = function (target: HTMLDivElement): boolean {
        let currentElement: HTMLDivElement = target;

        while ((currentElement.parentNode as HTMLDivElement).tagName !== 'BODY') {
            const parent: HTMLDivElement = currentElement.parentNode as HTMLDivElement;

            if (parent === container.current) {
                return true;
            }

            currentElement = parent;
        }

        return false;
    }

    const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const target: HTMLDivElement = e.target as HTMLDivElement;
        console.log('set playground scrolled');

        if (e.button === 0 && !isEntity(target)) {
            setPlaygroundScrolled(true);
            setPlaygroundMouseStartCoords({ x: e.clientX, y: e.clientY })
        }
    }, [])

    const onMouseUp = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (e.button === 0 && container.current && !isEntity(e.target as HTMLDivElement)) {
            setPlaygroundScrolled(false);
            setPlaygroundCoords({
                x: (container.current.parentNode as HTMLDivElement).scrollLeft,
                y: (container.current.parentNode as HTMLDivElement).scrollTop
            })
        }
    }, [playground.currentCoords, container]);

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (playground.scrolled) {
            setPlaygroundMouseCoords({x: e.clientX, y: e.clientY})
        }
    }, [playground.scrolled])

    const onMouseOut = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.relatedTarget as HTMLDivElement;

        if (container.current) {
            if (!target || target.tagName === 'HTML' || !isPlaygroundPlace(target)) {
                setPlaygroundScrolled(false);
                setPlaygroundCoords({
                    x: (container.current.parentNode as HTMLDivElement).scrollLeft,
                    y: (container.current.parentNode as HTMLDivElement).scrollTop
                })
            }
        }
    }, [playground.scrolled])

    return (
        <ThemeContainer
            themeStyles={css}
            className={[css.content, playground.scrolled ? css.draggable : ''].join(' ')}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
            ref={container}
        >
            { props.children }
        </ThemeContainer>
    );
};

export default React.memo(PlaygroundScrollContainer);