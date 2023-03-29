import React from 'react';
import css from './PlaygroundContent.module.scss';
import Entity, {IEntity} from "../Entity/Entity";

const PlaygroundContent = () => {
    const data: IEntity = {
        data: { title: 'Start', text: 'Start text'},
        points: [
            { data: { title: 'Second 1', text: 'Second text 1' },
                points: [
                    { data: { title: 'Three 1', text: 'Three text 1' }, points: [] },
                    { data: { title: 'Three 2', text: 'Three text 2' }, points: [] },
                    { data: { title: 'Three 3', text: 'Three text 3' }, points: [] },
                ]
            },
            { data: { title: 'Second 2', text: 'Second text 2' },
                points: [
                    { data: { title: 'Three 1', text: 'Three text 1' },
                        points: [
                            { data: { title: 'Four 1', text: 'Four text 1' }, points: [] },
                            { data: { title: 'Four 2', text: 'Four text 2' },
                                points: [
                                    { data: { title: 'Five 1', text: 'Five text 1' }, points: [] },
                                    { data: { title: 'Five 2', text: 'Five text 2' }, points: [] },
                                    { data: { title: 'Five 3', text: 'Five text 3' }, points: [] },
                                    { data: { title: 'Five 4', text: 'Five text 4' }, points: [] },
                                    { data: { title: 'Five 5', text: 'Five text 5' }, points: [] },
                                ]
                            },
                        ]
                    },
                    { data: { title: 'Three 2', text: 'Three text 2' }, points: [] },
                ]
            },
            { data: { title: 'Second 3', text: 'Second text 3' },
                points: [
                    { data: { title: 'Three 1', text: 'Three text 1' }, points: [] },
                    { data: { title: 'Three 2', text: 'Three text 2' },
                        points: [
                            { data: { title: 'Four 1', text: 'Four text 1' }, points: [] },
                            { data: { title: 'Four 2', text: 'Four text 2' }, points: [] },
                        ]
                    },
                    { data: { title: 'Three 3', text: 'Three text 3' }, points: [] },
                ]
            },
        ]
    }

    console.log('playground content rerender');

    return (
        <div className={css.content}>
            <Entity {...data}/>
        </div>
    );
};

export default React.memo(PlaygroundContent);