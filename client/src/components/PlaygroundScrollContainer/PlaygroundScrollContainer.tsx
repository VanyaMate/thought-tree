import React, {useCallback, useEffect, useState} from 'react';
import ThemeContainer from "../UI/Buttons/ThemeContainer/ThemeContainer";
import css from './PlaygroundScrollContainer.module.scss';
import Button from "../UI/Buttons/Button/Button";
import {IDefaultComponent} from "../IDefaultComponent";
import {useActions} from "../../hooks/redux.hook";

const PlaygroundScrollContainer: React.FC<IDefaultComponent> = (props) => {
    const [draggable, setDraggable] = useState<boolean>(false);
    const {setPlaygroundCoords} = useActions();

    const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        setDraggable(true);
        setPlaygroundCoords({ x: e.clientX, y: e.clientY })
    }, [])

    const onMouseUp = useCallback(() => {
        setDraggable(false);
    }, [])

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        draggable && setPlaygroundCoords({ x: e.clientX, y: e.clientY })
    }, [])

    return (
        <ThemeContainer
            themeStyles={css}
            className={css.content}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
        >
            Theme
        </ThemeContainer>
    );
};

export default React.memo(PlaygroundScrollContainer);