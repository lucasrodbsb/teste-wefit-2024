import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, Products } from "../../../types/ProductTypes";

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://wefit-movies.vercel.app/api/movies"
    }),
    tagTypes: ["movies"],
    endpoints: (builder) => ({
        getAllMovies: builder.query<Products, void>({
          query: () => ({
            url: ``,
            method: "GET",
          }),
          providesTags: ["movies"],
        }),
    })
})

export const {useGetAllMoviesQuery} = moviesApi;