import React from 'react';
import css from "./EntityCard.module.scss";
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import PlaygroundThemeContainer from "../../Themes/PlaygroundThemeContainer/PlaygroundThemeContainer";
import ScrollToEntityButton from "../../Buttons/ScrollToEntityButton/ScrollToEntityButton";
import EntityTextarea from "../EntityTextarea/EntityTextarea";
import {useActions, useMySelector} from "../../../hooks/redux.hook";
import EntityCardCreateButton from "./EntityCardCreateButton/EntityCardCreateButton";
import EntityControl from "../EntityControl/EntityControl";

export interface IEntityCard {
    ref?: any,
    root?: boolean,
    parentId?: number,
    id: number,
}

/**
 * TODO Это всё ужас. Надо переделать архитектуру хранения/получения/изменения итд данных.
 * Но в целом примерно уже понятно как это будет выглядеть. Хоть что-то
 */

const EntityCard: React.FC<IEntityCard> = React.forwardRef<HTMLDivElement, IEntityCard>((props, ref) => {
    const entities = useMySelector((state) => state.entities);
    const parentData = entities.entityTrees[props.parentId || 0]?.data;
    const currentData = entities.entityTrees[props.id];
    const user = useMySelector((state) => state.user);
    const {updateEntityData} = useActions();

    return (
        <PlaygroundThemeContainer themeStyles={css} className={css.cardType} data-entity={'true'} ref={ref} id={`ent_${ currentData.data.id }`} data-root-entity={props.root ?? 'false'}>
            <ColorThemeContainer themeStyles={css} className={[css.card, currentData.saved ? '' : css.edited].join(' ')}>
                <EntityControl id={props.id}/>
                <ScrollToEntityButton entityId={parentData?.id} className={css.parent}/>
                <EntityTextarea
                    className={css.title}
                    value={ currentData.data.title }
                    entityId={props.id}
                    onValueChange={(title) => updateEntityData({ entityId: props.id, data: { title } })}
                />
                <EntityTextarea
                    className={css.text}
                    value={ currentData.data.text }
                    entityId={props.id}
                    onValueChange={(text) => updateEntityData({ entityId: props.id, data: { text } })}
                /><br/>
                <h4 style={{marginTop: 10}}>Дочерние элементы</h4>
                {
                    currentData.points.map((point, index) => <ScrollToEntityButton key={index} entityId={point}/>)
                }
                <EntityCardCreateButton hidden={false} toEntity={props.id} user={user.login}/>
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










