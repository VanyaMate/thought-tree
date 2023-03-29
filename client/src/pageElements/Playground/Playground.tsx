import React, {useEffect, useRef} from 'react';
import css from './Playground.module.scss';
import ThemeContainer from "../../components/UI/Buttons/ThemeContainer/ThemeContainer";
import PlaygroundScrollContainer from "../../components/PlaygroundScrollContainer/PlaygroundScrollContainer";
import {useActions, useMySelector} from "../../hooks/redux.hook";
import PlaygroundContent from "../../components/PlaygroundContent/PlaygroundContent";

const Playground = () => {
    const playground = useMySelector(state => state.playground);
    const {setPlaygroundCoords} = useActions();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollLeft = playground.currentCoords.x;
            ref.current.scrollTop = playground.currentCoords.y;
        }
    }, [playground.currentCoords])

    const onScroll = function (e: React.UIEvent<HTMLDivElement>) {
        if (!playground.scrolled) {
            setPlaygroundCoords({
                x: (e.target as HTMLDivElement).scrollLeft,
                y: (e.target as HTMLDivElement).scrollTop,
            })
        }
    }

    return (
        <ThemeContainer themeStyles={css} className={css.container}>
            <div className={css.scrollContainer} ref={ref} onScroll={onScroll}>
                <PlaygroundScrollContainer>
                    <PlaygroundContent/>
                </PlaygroundScrollContainer>
            </div>
        </ThemeContainer>
    );
};

export default Playground;