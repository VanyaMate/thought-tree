import React, {useCallback} from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import Button from "../../UI/Buttons/Button/Button";
import {useLocation, useNavigate} from "react-router-dom";
import {getUUID} from "../../../../../utils/methods";

export interface IScrollToEntityButton extends IDefaultComponent {
    entityId: number
}

const ScrollToEntityButton: React.FC<IScrollToEntityButton> = (props) => {
    const location = useLocation();
    const navigation = useNavigate();

    const scrollHandler = useCallback(() => {
        navigation(`${location.pathname}#ent-${props.entityId}-${getUUID(5)}`)
    }, [props.entityId])

    if (props.entityId === -1) {
        return <></>;
    }

    return (
        <Button active onClick={scrollHandler} className={props.className}>{ props.children }</Button>
    );
};

export default ScrollToEntityButton;