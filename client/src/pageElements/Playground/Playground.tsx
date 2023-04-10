import React, {useEffect, useRef} from 'react';
import css from './Playground.module.scss';
import PlaygroundScrollContainer from "../../components/PlaygroundContent/PlaygroundScrollContainer/PlaygroundScrollContainer";
import {useActions, useMySelector} from "../../hooks/redux.hook";
import PlaygroundContent from "../../components/PlaygroundContent/PlaygroundContent";
import ColorThemeContainer from "../../components/Themes/ColorThemeContainer/ColorThemeContainer";
import PlaygroundContentControl
    from "../../components/PlaygroundContent/PlaygroundContentControl/PlaygroundContentControl";
import {IEntity} from "../../components/Entity/Entity";

export interface IPlayground {
    entry: IEntity
}

const Playground: React.FC<IPlayground> = (props) => {
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
        <ColorThemeContainer themeStyles={css} className={css.container}>
            <PlaygroundContentControl/>
            <div className={css.scrollContainer} ref={ref} onScroll={onScroll}>
                <PlaygroundScrollContainer>
                    <PlaygroundContent {...props}/>
                </PlaygroundScrollContainer>
            </div>
        </ColorThemeContainer>
    );
};

export default React.memo(Playground);