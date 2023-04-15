import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './EntityCardCreateButton.module.scss';
import Button from "../../../UI/Buttons/Button/Button";
import {IEntity} from "../../Entity";
import {useLazyCreateEntityQuery} from "../../../../store/entities/entities.api";
import {useActions, useMySelector} from "../../../../hooks/redux.hook";

export interface IEntityCardCreateButton extends IDefaultComponent {
    hidden: boolean,
    data: IEntity,
    user: string
}

const EntityCardCreateButton: React.FC<IEntityCardCreateButton> = (props) => {
    const [dispatchCreate, { isFetching, isError, data }] = useLazyCreateEntityQuery();
    const auth = useMySelector((state) => state.auth);
    const entity = useMySelector((state) => state.entities);
    const { addUserEntities, addChildToCurrentEntity } = useActions();

    return (
        <ColorThemeContainer
            themeStyles={css}
            className={[css.container, props.hidden ? css.hidden : ''].join(' ')}
        >
            <Button
                className={css.button}
                active
                onClick={() => {
                    dispatchCreate({
                        title: 'Any title',
                        text: 'Any text',
                        token: auth.bearer,
                    }).then((response) => {
                        if (response.data) {
                            addUserEntities([response.data]);
                            addChildToCurrentEntity({ entity: props.data, child: response.data, author: props.user })
                        }
                    })
                }}
            >
                +
            </Button>
        </ColorThemeContainer>
    );
};

export default EntityCardCreateButton;