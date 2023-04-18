import React from 'react';
import css from './EntityControl.module.scss';
import EntityToggleRedactModeButton, {IEntityId} from "./EntityToggleRedactModeButton/EntityToggleRedactModeButton";
import EntitySaveButton from "./EntitySaveButton/EntitySaveButton";
import EntityDeleteButton from "./EntityDeleteButton/EntityDeleteButton";
import EntitySelectLikeRoot from "./EntitySelectLikeRoot/EntitySelectLikeRoot";
import ColorThemeContainer from "../../Themes/ColorThemeContainer/ColorThemeContainer";

const EntityControl: React.FC<IEntityId> = (props) => {
    return (
        <ColorThemeContainer themeStyles={css} className={css.container}>
            <div className={css.left}>
                <EntityToggleRedactModeButton id={props.id}/>
                <EntitySaveButton id={props.id}/>
                <EntityDeleteButton/>
            </div>
            <div className={css.right}>
                <EntitySelectLikeRoot id={props.id}/>
            </div>
        </ColorThemeContainer>
    );
};

export default EntityControl;