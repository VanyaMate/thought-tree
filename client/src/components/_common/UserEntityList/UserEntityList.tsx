import React from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import {IUser} from "../../../store/user/user.slice";
import css from './UserEntityList.module.scss';

export interface IUserEntityList extends IDefaultComponent {
    user: IUser
}

const UserEntityList: React.FC<IUserEntityList> = (props) => {
    return (
        <div className={css.container}>
            <h3>Entity list: { props.user.login }</h3>
            <div className={css.list}>
                {
                    props.user.entities.map((entity) => <div key={entity.id} className={css.item}>{entity.title}</div>)
                }
            </div>
        </div>
    );
};

export default UserEntityList;