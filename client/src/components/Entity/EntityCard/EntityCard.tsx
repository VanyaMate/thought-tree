import React from 'react';
import css from "./EntityCard.module.scss";
import {IEntity, IEntityData} from "../Entity";
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import PlaygroundThemeContainer from "../../Themes/PlaygroundThemeContainer/PlaygroundThemeContainer";
import ScrollToEntityButton from "../../Buttons/ScrollToEntityButton/ScrollToEntityButton";
import EntityTextarea from "../EntityTextarea/EntityTextarea";
import EntityCardCreateButton from "./EntityCardCreateButton/EntityCardCreateButton";
import {useMySelector} from "../../../hooks/redux.hook";

export interface IEntityCard extends IEntity {
    ref?: any,
    root?: boolean,
    parentEntity?: IEntityData
}

/**
 * TODO Это всё ужас. Надо переделать архитектуру хранения/получения/изменения итд данных.
 * Но в целом примерно уже понятно как это будет выглядеть. Хоть что-то
 */

const EntityCard: React.FC<IEntityCard> = React.forwardRef<HTMLDivElement, IEntityCard>((props, ref) => {
    const parentData = props.parentEntity || null;
    const user = useMySelector((state) => state.user);
    const entities = useMySelector((state) => state.entities);

    return (
        <PlaygroundThemeContainer themeStyles={css} className={css.cardType} data-entity={'true'} ref={ref} id={`ent-${ props.data.id }`} data-root-entity={props.root ?? 'false'}>
            <ColorThemeContainer themeStyles={css} className={css.card}>
                <ScrollToEntityButton
                    entityId={parentData?.id || -1}
                    className={css.parent}
                >
                    {parentData?.title}
                </ScrollToEntityButton>
                <h4 className={css.title}>{ props.data.title }</h4>
                <EntityTextarea className={css.text} value={ props.data.text }/><br/>
                {
                    props.points.map((point, index) => <ScrollToEntityButton key={index} entityId={point.data.id}>{point.data.title}</ScrollToEntityButton>)
                }
                { (user.login === props.data.author.login) ? <EntityCardCreateButton user={user.login} data={props} hidden={!entities.redactMode}/> : '' }
            </ColorThemeContainer>
        </PlaygroundThemeContainer>
    );
});

export default React.memo(EntityCard);


/**
 *
 * {-{"id": string, "text": string, "type": string, data: any}-}
 * {-{id}-}
 *
 *
 */










