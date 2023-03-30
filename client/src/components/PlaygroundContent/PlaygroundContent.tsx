import React, {useEffect} from 'react';
import css from './PlaygroundContent.module.scss';
import Entity from "../Entity/Entity";
import {data} from "./_tempo_data";
import {useLocation} from 'react-router-dom'

const PlaygroundContent = () => {
    const { hash } = useLocation();

    useEffect(() => {
        const entity = document.querySelector(`${hash || 'noelementselector'}`);
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
    }, [hash])

    return (
        <div className={css.content}>
            <Entity {...data} root/>
        </div>
    );
};

export default React.memo(PlaygroundContent);