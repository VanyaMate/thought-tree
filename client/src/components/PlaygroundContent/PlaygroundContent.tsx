import React, {ReactElement, useEffect} from 'react';
import css from './PlaygroundContent.module.scss';
import Entity from "../Entity/Entity";
import {data} from "./_tempo_data";
import {useLocation} from 'react-router-dom'

const PlaygroundContent = () => {
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

    /**
     * TODO: Убрать этот временный код
     */
    const str = 'test string (&){"title": "component1"}(&) some string (&){"title": "component2"}(&)';
    const regex = /\(&\)(.*?)\(&\)/g;
    const texts: string[] = str.split(regex);
    const result: ReactElement[] = [];


    for (let i = 0; i < texts.length; i++) {
        try {
            const json = JSON.parse(texts[i]);
            result[i] = <span style={{fontSize: 40}}>{json.title}</span>
        } catch {
            result[i] = <>{texts[i]}</>
        }
    }

    // <EntityPage {...data} root/>
    // <CreateEntity/>
    return (
        <div className={css.content}>
            <Entity {...data} root/>
        </div>
    );
};

export default React.memo(PlaygroundContent);