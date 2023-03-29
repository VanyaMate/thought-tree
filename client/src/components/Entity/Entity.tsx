import React, {useRef} from 'react';
import css from './Entity.module.scss';
import EntityCard from "./EntityCard/EntityCard";
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";

export interface IEntityData {
    title: string,
    text: string
}

export interface IEntity {
    data: IEntityData,
    points: IEntity[]
}

export interface IEntityComponent {
    entity: IEntity,
    parentWidth: number,
    index: number,
}

const Entity: React.FC<IEntityComponent> = (props) => {
    const container = useRef<HTMLDivElement>(null);

    return (
        <ColorThemeContainer themeStyles={css} className={css.container} ref={container}>
            <EntityCard {...props.entity.data}/>
            <div className={css.points}>
                {
                    /**
                     *  TODO: Заменить index на point.id после создания DB
                     *  Потому что в будущем планируется добавить возможность изменять order
                     *  и чтобы предотвратить ререндер - нужно заменить index
                     * */
                    props.entity.points.map((point, index) => <Entity key={index} {...point}/>)
                }
            </div>
        </ColorThemeContainer>
    );
};

export default Entity;