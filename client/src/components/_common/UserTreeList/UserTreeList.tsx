import React from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import {IUser} from "../../../store/user/user.slice";
import CommonContainer from "../../Containers/CommonContainer/CommonContainer";
import css from './UserTreeList.module.scss';
import Vertical from "../../Containers/Vertical/Vertical";
import Button from "../../UI/Buttons/Button/Button";
import {useLazyCreateTreeQuery, useLazyDeleteTreeQuery} from "../../../store/tree/tree.api";
import {useActions, useMySelector} from "../../../hooks/redux.hook";
import Input from "../../UI/Inputs/Input/Input";
import {useInputValue} from "../../../hooks/useInputValue";
import TreeCreateForm from "../TreeCreateForm/TreeCreateForm";

export interface IUserTreeList extends IDefaultComponent {
    user: IUser
}

const UserTreeList: React.FC<IUserTreeList> = (props) => {
    /**
     * TODO: Вынести всё это в разные компоненты
     * Пока что это просто тест бэка
     */
    const [dispatchTreeDelete] = useLazyDeleteTreeQuery();
    const [dispatchTreeCreate] = useLazyCreateTreeQuery();
    const { removeUserTree, addUserTrees } = useActions();
    const auth = useMySelector((state) => state.auth);
    const title = useInputValue('');
    const description = useInputValue('');

    return (
        <CommonContainer className={css.container}>
            <h3>Tree list: { props.user.login }</h3>
            <Vertical offset={10} className={css.list}>
                {
                    props.user.trees.map((tree) =>
                        <div key={tree.id}>
                            [{ tree.id }] {tree.title} - { props.user.login }
                            <Button active onClick={() => {
                                dispatchTreeDelete({ id: tree.id, token: auth.bearer }).then((response) => {
                                    removeUserTree(tree.id);
                                })
                            }}>Delete</Button>
                        </div>)
                }
            </Vertical>
            <h3>Add tree</h3>
            <Vertical offset={10}>
                <TreeCreateForm/>
            </Vertical>
        </CommonContainer>
    );
};

export default UserTreeList;