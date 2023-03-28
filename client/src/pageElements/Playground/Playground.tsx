import React, {useState} from 'react';
import css from './Playground.module.scss';
import ThemeContainer from "../../components/UI/Buttons/ThemeContainer/ThemeContainer";
import MouseScrollContainer from "../../components/MouseScrollContainer/MouseScrollContainer";

const Playground = () => {
    const [draggable, setDraggable] = useState<boolean>(false);
    const [startDragCoords, setStartDragCoords] = useState<{x: number, y: number}>({x: 0, y: 0})

    const onMouseDown = function (e: React.MouseEventHandler) {
        console.log(e);
        setDraggable(true);
    }

    const onMouseUp = function () {
        setDraggable(false);
    }

    return (
        <ThemeContainer light={css.light} dark={css.dark} className={css.container}>
            <MouseScrollContainer/>
        </ThemeContainer>
    );
};

export default Playground;