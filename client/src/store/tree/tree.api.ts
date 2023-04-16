import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TREE_API_URL} from "../../cfg/urls";

export interface ITreeCreateData {
    title: string,
    description?: string,
}

export interface ITreeCreate {
    token: string,
    data: ITreeCreateData,
}

export const treeApi = createApi({
    reducerPath: 'api/tree',
    baseQuery: fetchBaseQuery({
        baseUrl: TREE_API_URL
    }),
    endpoints: (build) => ({
        createTree: build.query<
            any, ITreeCreate
            >({
            query: (body) => ({
                url: '/create',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'authorization': `Bearer ${ body.token }`,
                },
                cache: 'no-cache',
                body: body.data
            })
        }),
        deleteTree: build.query<
            any, { id: number, token: string }
            >({
            query: ({ id, token }) => ({
                url: '/delete',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'authorization': `Bearer ${ token }`,
                },
                cache: 'no-cache',
                body: { id }
            })
        }),
        getTreeById: build.query<
            any, { id: number, token: string }
            >({
            query: ({ id, token }) => ({
                url: `/get/${ id }`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'authorization': `Bearer ${ token }`,
                },
                cache: 'no-cache'
            })
        }),
        updateTreeJson: build.query<
            any, { id: number, tree_json: string, token: string }
            >({
            query: ({id, token, tree_json}) => ({
                url: `/update/tree_json`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'authorization': `Bearer ${token}`,
                },
                cache: 'no-cache',
                body: {
                    id, tree_json
                }
            })
        }),
    })
})

export const { useLazyCreateTreeQuery, useLazyDeleteTreeQuery, useLazyGetTreeByIdQuery, useLazyUpdateTreeJsonQuery } = treeApi;