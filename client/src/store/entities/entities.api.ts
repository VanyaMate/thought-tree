import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ENTITY_API_URL} from "../../cfg/urls";

export interface IEntityCreateData {
    title: string,
    text: string,
    token: string,
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
        })
    })
})

export const { useLazyCreateEntityQuery } = entitiesApi;