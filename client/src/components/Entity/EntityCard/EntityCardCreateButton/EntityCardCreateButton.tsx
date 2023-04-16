import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './EntityCardCreateButton.module.scss';
import Button from "../../../UI/Buttons/Button/Button";
import {useLazyCreateEntityQuery} from "../../../../store/entities/entities.api";
import {useActions, useMySelector} from "../../../../hooks/redux.hook";
import {getUUID} from "../../../../../../utils/methods";
import {useNavigate} from "react-router-dom";

export interface IEntityCardCreateButton extends IDefaultComponent {
    hidden: boolean,
    toEntity: number,
    user: string
}

const EntityCardCreateButton: React.FC<IEntityCardCreateButton> = (props) => {
    const [dispatchCreate, { isFetching, isError, data }] = useLazyCreateEntityQuery();
    const auth = useMySelector((state) => state.auth);
    const entities = useMySelector((state) => state.entities);
    const { addUserEntities, addNewPointToEntity } = useActions();
    const navigation = useNavigate();

    return (
        <ColorThemeContainer
            themeStyles={css}
            className={[css.container, !entities.entityTrees[props.toEntity].redactMode ? css.hidden : ''].join(' ')}
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
                            addNewPointToEntity({ entityId: props.toEntity, point: { data: response.data, redactMode: true, points: [] } })
                            navigation(`${location.pathname}#ent_${response.data.id}-${getUUID(5)}`)
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