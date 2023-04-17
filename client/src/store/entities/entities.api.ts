import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ENTITY_API_URL} from "../../cfg/urls";

export interface IEntityCreateData {
    title: string,
    text: string,
    token: string,
}

export interface IEntityUpdateData extends IEntityCreateData {
    id: number
}

export interface IEntityDelete {
    token: string,
    id: number,
}

export const entitiesApi = createApi({
    reducerPath: 'api/entities',
    baseQuery: fetchBaseQuery({
        baseUrl: ENTITY_API_URL
    }),
    endpoints: (build) => ({
        createEntity: build.query<
            any, IEntityCreateData
            >({
            query: (props) => ({
                url: '/create',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'authorization': `Bearer ${ props.token }`
                },
                cache: 'no-cache',
                body: {
                    title: props.title,
                    text: props.text
                },
            })
        }),
        updateEntity: build.query<
            any, IEntityUpdateData
            >({
            query: (props) => ({
                url: `/update/${ props.id }`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'authorization': `Bearer ${ props.token }`
                },
                cache: 'no-cache',
                body: {
                    title: props.title,
                    text: props.text
                },
            })
        }),
        deleteEntity: build.query<
            any, IEntityDelete
            >({
            query: (props) => ({
                url: `/delete/${ props.id }`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'authorization': `Bearer ${ props.token }`
                },
                cache: 'no-cache',
            })
        }),
    })
})

export const { useLazyCreateEntityQuery, useLazyUpdateEntityQuery, useLazyDeleteEntityQuery } = entitiesApi;