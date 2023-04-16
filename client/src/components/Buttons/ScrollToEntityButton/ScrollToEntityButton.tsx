import React, {useCallback} from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import Button from "../../UI/Buttons/Button/Button";
import {useLocation, useNavigate} from "react-router-dom";
import {getUUID} from "../../../../../utils/methods";
import {useMySelector} from "../../../hooks/redux.hook";

export interface IScrollToEntityButton extends IDefaultComponent {
    entityId: number
}

const ScrollToEntityButton: React.FC<IScrollToEntityButton> = (props) => {
    const entities = useMySelector((state) => state.entities);
    const location = useLocation();
    const navigation = useNavigate();

    const scrollHandler = useCallback(() => {
        navigation(`${location.pathname}#ent_${props.entityId}-${getUUID(5)}`)
    }, [props.entityId])

    if (props.entityId === -1 || !entities.entityTrees[props.entityId]) {
        return <></>;
    }

    return (
        <Button active onClick={scrollHandler} className={props.className}>{ entities.entityTrees[props.entityId].data.title }</Button>
    );
};

export default ScrollToEntityButton;