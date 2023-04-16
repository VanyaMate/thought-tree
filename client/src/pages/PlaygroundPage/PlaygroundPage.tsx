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
    const params = useParams<{ treeId: string }>();
    const { setCurrentTreeJson, resetCurrentEntity } = useActions();
    const auth = useMySelector((state) => state.auth);
    const [dispatchGettingData, { isFetching, isError, data }] = useLazyGetTreeByIdQuery();

    useEffect(() => {
        // dispatch getting data after change pathname
        dispatchGettingData({ id: +params.treeId!, token: auth.bearer });
    }, [pathname])

    useEffect(() => {
        if (data?.tree && data.entities?.length) {
            const tree = JSON.parse(data.tree.tree_json)
            setCurrentTreeJson(JSON.stringify(concatenateTreeWithEntity(tree, data.entities)));
        } else {
            resetCurrentEntity();
        }
    }, [data])

    return (
        <Playground/>
    );
};

export default React.memo(PlaygroundPage);