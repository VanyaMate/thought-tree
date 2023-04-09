import React from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import {IUser} from "../../../store/user/user.slice";
import CommonContainer from "../../Containers/CommonContainer/CommonContainer";
import css from './UserTreeList.module.scss';
import Vertical from "../../Containers/Vertical/Vertical";

export interface IUserTreeList extends IDefaultComponent {
    user: IUser
}

const UserTreeList: React.FC<IUserTreeList> = (props) => {
    return (
        <CommonContainer className={css.container}>
            <h3>Tree list: { props.user.login }</h3>
            <Vertical offset={10} className={css.list}>
                {
                    props.user.trees.map((tree) => <div key={tree.id}>{tree.title} - {tree.tree_json} / { props.user.login }</div>)
                }
            </Vertical>
        </CommonContainer>
    );
};

export default UserTreeList;