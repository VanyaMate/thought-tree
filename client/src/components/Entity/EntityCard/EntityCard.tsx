import React from 'react';
import css from "./EntityCard.module.scss";
import {generateString} from "../../../../../utils/methods";
import {rus} from "../../../../../utils/store.words";
import {IEntity, IEntityData} from "../Entity";
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";
import PlaygroundThemeContainer from "../../Themes/PlaygroundThemeContainer/PlaygroundThemeContainer";
import ScrollToEntityButton from "../../Buttons/ScrollToEntityButton/ScrollToEntityButton";
import EntityTextarea from "../EntityTextarea/EntityTextarea";

export interface IEntityCard extends IEntity {
    ref?: any,
    root?: boolean,
    parentEntity?: IEntityData
}

const EntityCard: React.FC<IEntityCard> = React.forwardRef<HTMLDivElement, IEntityCard>((props, ref) => {
    const parentData = props.parentEntity || null;

    return (
        <PlaygroundThemeContainer themeStyles={css} className={css.cardType} data-entity={'true'} ref={ref} id={`ent-${ props.data.id }`} data-root-entity={props.root ?? 'false'}>
            <ColorThemeContainer themeStyles={css} className={css.card}>
                <ScrollToEntityButton entityId={parentData?.id || -1}>{parentData?.title}</ScrollToEntityButton>
                <h4 className={css.title}>{ props.data.title }</h4>
                <EntityTextarea className={css.text} value={ props.data.text }/>
                {
                    props.points.map((point) => <ScrollToEntityButton key={point.data.id} entityId={point.data.id}>{point.data.title}</ScrollToEntityButton>)
                }
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










