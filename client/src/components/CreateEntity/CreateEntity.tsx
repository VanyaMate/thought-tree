import React from 'react';
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './CreateEntity.module.scss';
import EntityTextarea from "../EntityTextarea/EntityTextarea";

const CreateEntity = () => {
    return (
        <ColorThemeContainer themeStyles={css} className={css.container} data-entity={'true'}>
            CreateEntity
            <h4>Title</h4>
            <EntityTextarea value={'text'}/>
            <h4>Text</h4>
            <EntityTextarea value={'text 2'}/>
        </ColorThemeContainer>
    );
};

export default CreateEntity;