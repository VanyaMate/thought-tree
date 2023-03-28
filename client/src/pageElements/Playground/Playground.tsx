import React, {useEffect, useRef} from 'react';
import css from './Playground.module.scss';
import ThemeContainer from "../../components/UI/Buttons/ThemeContainer/ThemeContainer";
import PlaygroundScrollContainer from "../../components/PlaygroundScrollContainer/PlaygroundScrollContainer";
import {useMySelector} from "../../hooks/redux.hook";

const Playground = () => {
    const playground = useMySelector(state => state.playground);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollLeft = playground.coords.x;
            ref.current.scrollTop = playground.coords.y;
        }
    }, [playground.coords])

    return (
        <ThemeContainer themeStyles={css} className={css.container}>
            <div className={css.scrollContainer} ref={ref}>
                <PlaygroundScrollContainer/>
            </div>
        </ThemeContainer>
    );
};

export default Playground;