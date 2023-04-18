import React from 'react';
import SmallIconButton from "../../../UI/Buttons/SmallIconButton/SmallIconButton";

const EntityDeleteButton = () => {
    return (
        <SmallIconButton
            onClick={() => {

            }}
            icon={'/icons/delete.png'}
            info={'Удалить'}
            active
        />
    );
};

export default EntityDeleteButton;