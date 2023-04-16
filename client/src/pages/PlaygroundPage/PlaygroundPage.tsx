import React, {useEffect, useMemo} from 'react';
import Playground from "../../pageElements/Playground/Playground";
import {useLocation, useParams} from "react-router-dom";
import {useLazyGetTreeByIdQuery} from "../../store/tree/tree.api";
import {useActions, useMySelector} from "../../hooks/redux.hook";
import {
    concatenateTreeWithEntity
} from "../../../utils/entities/concatenateTreeJsonWithEntity";

const PlaygroundPage = () => {
    const { pathname } = useLocation();
    const params = useParams<{ treeId: string, rootId: string }>();
    const { setCurrentTreeJson, resetCurrentEntity, setEntityRootId, setCurrentTreeId } = useActions();
    const auth = useMySelector((state) => state.auth);
    const entities = useMySelector((state) => state.entities);
    const [dispatchGettingData, { isFetching, isError, data }] = useLazyGetTreeByIdQuery();

    /**
     * TODO: Разобрать этот беспорядок
     */
    useEffect(() => {
        // dispatch getting data after change pathname
        if (entities.treeId !== Number(params.treeId)) {
            resetCurrentEntity();
            dispatchGettingData({ id: +params.treeId!, token: auth.bearer }).then(({ data }) => {
                setCurrentTreeId(Number(params.treeId));
                if (data?.tree && data.entities?.length) {
                    const tree = JSON.parse(data.tree.tree_json)
                    setCurrentTreeJson(JSON.stringify(concatenateTreeWithEntity(tree, data.entities)));
                } else {
                    resetCurrentEntity();
                }

                if (params.rootId) {
                    setEntityRootId(Number(params.rootId));
                }
            });
        } else if (params.rootId) {
            setEntityRootId(Number(params.rootId));
        }
    }, [pathname])

    return (
        <Playground/>
    );
};

export default React.memo(PlaygroundPage);