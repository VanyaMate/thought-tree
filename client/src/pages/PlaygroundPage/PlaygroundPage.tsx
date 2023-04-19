import React, {useEffect, useMemo} from 'react';
import Playground from "../../pageElements/Playground/Playground";
import {useLocation, useParams} from "react-router-dom";
import {useLazyGetTreeByIdQuery} from "../../store/tree/tree.api";
import {useActions, useMySelector} from "../../hooks/redux.hook";
import {
    concatenateTreeWithEntity
} from "../../../utils/entities/entity-tree-json.methods";

const PlaygroundPage = () => {
    const { pathname } = useLocation();
    const params = useParams<{ treeId: string, rootId: string }>();
    const { setTreeJson, resetEntityList, setTreeRootId, setTreeCurrentRootId, setTreeId, setEntityListByJson } = useActions();
    const auth = useMySelector((state) => state.auth);
    const re_entities = useMySelector((state) => state.re_entities);
    const tree = useMySelector((state) => state.tree);
    const [dispatchGettingData, { isFetching, isError, data }] = useLazyGetTreeByIdQuery();

    /**
     * TODO: Разобрать этот беспорядок
     */
    useEffect(() => {
        // dispatch getting data after change pathname
        if (tree.treeId !== Number(params.treeId)) {
            resetEntityList();
            dispatchGettingData({ id: +params.treeId!, token: auth.bearer }).then(({ data }) => {
                setTreeId(Number(params.treeId));
                if (data?.tree && data.entities?.length) {
                    const tree = JSON.parse(data.tree.tree_json);
                    const entitiesTree = concatenateTreeWithEntity(tree, data.entities);

                    setTreeCurrentRootId(tree.id);
                    setTreeRootId(tree.id);
                    setTreeJson(JSON.stringify(entitiesTree));
                    setEntityListByJson(entitiesTree);
                } else {
                    resetEntityList();
                }

                if (params.rootId) {
                    setTreeCurrentRootId(Number(params.rootId));
                }
            });
        } else if (params.rootId) {
            setTreeCurrentRootId(Number(params.rootId));
        } else {
            setTreeCurrentRootId(tree.rootId);
        }
    }, [pathname]);

    return (
        <Playground/>
    );
};

export default React.memo(PlaygroundPage);