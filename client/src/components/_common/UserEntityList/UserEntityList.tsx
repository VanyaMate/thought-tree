import React from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import {IUser} from "../../../store/user/user.slice";
import css from './UserEntityList.module.scss';
import CommonContainer from "../../Containers/CommonContainer/CommonContainer";
import Vertical from "../../Containers/Vertical/Vertical";

export interface IUserEntityList extends IDefaultComponent {
    user: IUser
}

const UserEntityList: React.FC<IUserEntityList> = (props) => {
    return (
        <CommonContainer className={css.container}>
            <h3>Entity list: { props.user.login }</h3>
            <Vertical offset={10} className={css.list}>
                {
                    props.user.entities.map((entity) => <div key={entity.id} className={css.item}>{entity.title}</div>)
                }
            </Vertical>
        </CommonContainer>
    );
};

export default UserEntityList;