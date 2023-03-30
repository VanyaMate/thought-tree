import React, {useCallback} from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import Button from "../../UI/Buttons/Button/Button";
import {IEntityData} from "../../Entity/Entity";
import {useLocation, useNavigate} from "react-router-dom";

export interface IScrollToEntityButton extends IDefaultComponent {
    entity: {
        data: IEntityData | null
    },
}

const ScrollToEntityButton: React.FC<IScrollToEntityButton> = (props) => {
    const location = useLocation();
    const navigation = useNavigate();

    const scrollHandler = useCallback(() => {
        navigation(`${location.pathname}#${props.entity.data!.id}`)
    }, [props.entity.data])

    if (!props.entity.data) {
        return <></>;
    }

    return (
        <Button active onClick={scrollHandler}>{ props.entity.data.title }</Button>
    );
};

export default ScrollToEntityButton;