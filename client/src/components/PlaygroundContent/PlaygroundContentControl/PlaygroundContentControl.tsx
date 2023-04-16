import React, {useEffect} from 'react';
import css from './PlaygroundContentControl.module.scss';
import SmallButton from "../../UI/Buttons/SmallButton/SmallButton";
import {useActions, useMySelector} from "../../../hooks/redux.hook";
import {useLazyUpdateTreeJsonQuery} from "../../../store/tree/tree.api";
import {useParams} from "react-router-dom";

const PlaygroundContentControl = () => {
    const entities = useMySelector((state) => state.entities);
    const auth = useMySelector((state) => state.auth);
    const { treeId } = useParams();
    const { generateTreeJson } = useActions();
    const [dispatchUpdateTreeJson] = useLazyUpdateTreeJsonQuery();

    useEffect(() => {
        if (entities.generated_tree_json) {
            dispatchUpdateTreeJson({
                id: Number(treeId),
                tree_json: entities.generated_tree_json,
                token: auth.bearer
            })
        }
    }, [entities.generated_tree_json])

    return (
        <div className={css.container}>
            <SmallButton className={[css.button].join(' ')} onClick={() => generateTreeJson(entities.rootId)} active/>
        </div>
    );
};

export default React.memo(PlaygroundContentControl);