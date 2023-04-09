import React from 'react';
import Input from "../../UI/Inputs/Input/Input";
import Button from "../../UI/Buttons/Button/Button";
import {useActions, useMySelector} from "../../../hooks/redux.hook";
import {useInputValue} from "../../../hooks/useInputValue";
import {useLazyCreateTreeQuery} from "../../../store/tree/tree.api";

const TreeCreateForm = () => {
    const auth = useMySelector((state) => state.auth);
    const title = useInputValue('');
    const description = useInputValue('');
    const [dispatchTreeCreate] = useLazyCreateTreeQuery();
    const { addUserTrees } = useActions();

    return (
        <>
            <Input inputValue={title} placeholder={'title'}/>
            <Input inputValue={description} placeholder={'description'}/>
            <Button active={title.current.trim().length !== 0} onClick={() => {
                dispatchTreeCreate({
                    token: auth.bearer,
                    data: {
                        title: title.current,
                        description: description.current
                    }
                }).then((response) => {
                    addUserTrees([response.data]);
                })
            }}>Добавить</Button>
        </>
    );
};

export default TreeCreateForm;