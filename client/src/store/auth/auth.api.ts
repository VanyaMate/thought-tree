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
                url: '/login',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body
            })
        }),
        registration: build.query<
            any, ILogin
            >({
            query: (body) => ({
                url: '/registration',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body
            })
        })
    })
})

export const { useLazyLoginQuery, useLazyRegistrationQuery } = authApi;