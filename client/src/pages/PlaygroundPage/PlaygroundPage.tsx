import React, {useEffect, useMemo} from 'react';
import Playground from "../../pageElements/Playground/Playground";
import {IEntity} from "../../components/Entity/Entity";
import {useLocation, useParams} from "react-router-dom";
import {useLazyGetTreeByIdQuery} from "../../store/tree/tree.api";
import {useMySelector} from "../../hooks/redux.hook";
import {
    concatenateTreeWithEntity
} from "../../../utils/entities/concatenateTreeJsonWithEntity";

const PlaygroundPage = () => {
    const { pathname } = useLocation();
    const params = useParams<{ treeId: string }>();
    const auth = useMySelector((state) => state.auth);
    const [dispatchGettingData, { isFetching, isError, data }] = useLazyGetTreeByIdQuery();

    console.log(params.treeId);

    useEffect(() => {
        // dispatch getting data after change pathname
        dispatchGettingData({ id: +params.treeId!, token: auth.bearer });
    }, [pathname])

    const entryData = useMemo(() => {
        if (data?.tree && data.entities?.length) {
            const tree = JSON.parse(data.tree.tree_json)
            return concatenateTreeWithEntity(tree, data.entities);
        } else {
            return {};
        }
    }, [data])

    return (
        <Playground entry={entryData}/>
    );
};

export default React.memo(PlaygroundPage);