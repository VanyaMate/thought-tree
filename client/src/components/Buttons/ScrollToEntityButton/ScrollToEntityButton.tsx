import React, {useCallback} from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import Button from "../../UI/Buttons/Button/Button";
import {IEntityData} from "../../Entity/Entity";
import {useLocation, useNavigate} from "react-router-dom";
import {getUUID} from "../../../../../utils/methods";

export interface IScrollToEntityButton extends IDefaultComponent {
    entity: {
        data: IEntityData | null
    },
}

const ScrollToEntityButton: React.FC<IScrollToEntityButton> = (props) => {
    const location = useLocation();
    const navigation = useNavigate();

    const scrollHandler = useCallback(() => {
        console.log(props.entity.data);
        navigation(`${location.pathname}#${props.entity.data!.id}-${getUUID(5)}`)
    }, [props.entity.data])

    if (!props.entity.data) {
        return <></>;
    }

    return (
        <Button active onClick={scrollHandler}>{ props.entity.data.title }</Button>
    );
};

export default ScrollToEntityButton;