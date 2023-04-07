import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {AUTH_API_URL} from "../../cfg/urls";

export interface ILogin {
    login: string,
    password: string
}

export const authApi = createApi({
    reducerPath: 'api/auth',
    baseQuery: fetchBaseQuery({
        baseUrl: AUTH_API_URL
    }),
    endpoints: (build) => ({
        login: build.query<
            any, ILogin
            >({
            query: (body) => ({
                url: '/login?tree=10&entities=10',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                cache: 'no-cache',
                body
            })
        }),
        registration: build.query<
            any, ILogin
            >({
            query: (body) => ({
                url: '/registration?tree=10&entities=10',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                cache: 'no-cache',
                body
            })
        })
    })
})

export const { useLazyLoginQuery, useLazyRegistrationQuery } = authApi;