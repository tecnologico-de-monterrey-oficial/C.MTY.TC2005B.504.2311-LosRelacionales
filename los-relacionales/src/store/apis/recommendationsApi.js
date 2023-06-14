import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const recommendationsApi = createApi({
    reducerPath: 'recommendations',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010',
    }),
    endpoints(builder) {
        return {

            fetchRecomms: builder.query({
                providesTags: ["Recomms"],
                query: () => {
                    return {
                        url: '/get-recommendations',
                        method: 'GET',
                    };
                },
            }),

            fetchRecommById: builder.query({
                providesTags: ["Recomms"],
                query: (id) => {
                    return {
                        url: `/get-recommendation/${id}`,
                        method: 'GET',
                    };
                },
            }),

            fetchRecommByTestResultId: builder.query({
                providesTags: ["Recomms"],
                query: (id) => {
                    return {
                        url: `/get-recommendation-by-test-result/${id}`,
                        method: 'GET',
                    };
                },
            }),

            addRecomm: builder.mutation({
                invalidatesTags: ["Recomms"],
                query: (recomm) => {
                    return {
                        method: 'POST',
                        url: '/add-recommendation',
                        body: {
                            recommendation: recomm.recommendation,
                        },
                    };
                },
            }),


            editRecomm: builder.mutation({
                invalidatesTags: ["Recomms"],
                query: (recomm) => {
                    return {
                        method: 'PUT',
                        url: `/edit-recommendation/${recomm.recommendation_id}`,
                        body: {
                            recommendation: recomm.recommendation,
                        },
                    };
                },
            }),


            deleteRecomm: builder.mutation({
                invalidatesTags: ["Recomms"],
                query: (id) => {
                    return {
                        method: 'DELETE',
                        url: `/delete-recommendation/${id}`,
                    };
                },
            }),


        };
    },
});
export const {
    useFetchRecommsQuery, useFetchRecommByIdQuery, useFetchRecommByTestResultIdQuery, useAddRecommMutation, useEditRecommMutation, useDeleteRecommMutation
} = recommendationsApi;
export { recommendationsApi };
