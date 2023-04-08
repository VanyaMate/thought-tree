import React from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import {IUser} from "../../../store/user/user.slice";
import CommonContainer from "../../Containers/CommonContainer/CommonContainer";
import css from './UserTreeList.module.scss';

export interface IUserTreeList extends IDefaultComponent {
    user: IUser
}

const UserTreeList: React.FC<IUserTreeList> = (props) => {
    return (
        <CommonContainer className={css.container}>
            <h3>Tree list: { props.user.login }</h3>
            <div className={css.list}>
                Trees list
            </div>
        </CommonContainer>
    );
};

export default UserTreeList;