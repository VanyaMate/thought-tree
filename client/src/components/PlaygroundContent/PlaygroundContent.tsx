import React, {useEffect} from 'react';
import css from './PlaygroundContent.module.scss';
import Entity, {IEntity} from "../Entity/Entity";
import {useLocation} from 'react-router-dom'

export interface IPlaygroundContent {
    entry: IEntity
}

const PlaygroundContent: React.FC<IPlaygroundContent> = (props) => {
    const { hash } = useLocation();

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
    }, [hash])

    console.log(props.entry);

    return (
        <div className={css.content}>
            {
                props.entry.data ? <Entity {...props.entry} root/> : 'Loading'
            }
        </div>
    );
};

export default React.memo(PlaygroundContent);