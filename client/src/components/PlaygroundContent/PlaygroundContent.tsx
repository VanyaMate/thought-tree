import React, {useEffect} from 'react';
import css from './PlaygroundContent.module.scss';
import Entity from "../Entity/Entity";
import {useLocation} from 'react-router-dom'
import CreateEntity from "../Entity/CreateEntity/CreateEntity";
import {useMySelector} from "../../hooks/redux.hook";

const PlaygroundContent = () => {
    const { hash } = useLocation();
    const entities = useMySelector((state) => state.entities);

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
    }, [hash, entities.currentEntity])

    return (
        <div className={css.content}>
            {
                entities.currentEntity ? <Entity {...entities.currentEntity} root/> : 'Loading'
            }
        </div>
    );
};

export default React.memo(PlaygroundContent);