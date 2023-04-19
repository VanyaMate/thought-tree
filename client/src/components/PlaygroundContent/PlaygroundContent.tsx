import React, {useEffect} from 'react';
import css from './PlaygroundContent.module.scss';
import {useLocation} from 'react-router-dom'
import {useMySelector} from "../../hooks/redux.hook";
import Entity from "../ReEntity/Entity";

const PlaygroundContent = () => {
    const { hash } = useLocation();
    const rootId = useMySelector((state) => state.tree.currentRootId);

    useEffect(() => {
        const entity = document.querySelector(`${hash.split('-')[0] || 'noelementselector'}`);
        if (entity) {
            setTimeout(() => {
                entity.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            })
        } else {
            const rootEntity = document.querySelector(`*[data-root-entity="true"]`);
            rootEntity && setTimeout(() => {
                rootEntity.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            })
        }
    }, [hash, rootId])

    return (
        <div className={css.content}>
            <Entity id={rootId}/>
        </div>
    );
};

export default React.memo(PlaygroundContent);