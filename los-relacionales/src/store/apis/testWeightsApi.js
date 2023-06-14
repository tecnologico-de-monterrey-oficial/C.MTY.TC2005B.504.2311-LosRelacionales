import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pamsApi = createApi({
    reducerPath: 'testWeights',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010',
    }),
    endpoints(builder) {
        return {
            fetchTestWeightById: builder.query({
                providesTags: ["TestWeight"],
                query: (id) => {
                    return {
                        url: `/get-test-weight/${id}`,
                        method: 'GET',
                    };
                },
            }),
            

            addTestWeight: builder.mutation({
                invalidatesTags: ["TestWeight"],
                query: (testWeight) => {
                    return {
                        method: 'POST',
                        url: '/add-test-weight',
                        body: {
                            test_id: testWeight.test_id,
                            min_weight: testWeight.min_weight,
                            max_weight: testWeight.max_weight,
                            description: testWeight.description,
                            color: testWeight.color,
                            gender_id: testWeight.gender_id,
                            recommendation_id:  testWeight.recommendation_id // OPCIONAL
                        },
                    };
                },
            }),

            editTestWeight: builder.mutation({
                invalidatesTags: ["TestWeight"],
                query: (testWeight) => {
                    return {
                        method: 'PUT',
                        url: `/edit-test-weight/${testWeight.test_weight_id}`,
                        body: {
                            test_id: testWeight.test_id,
                            min_weight: testWeight.min_weight,
                            max_weight: testWeight.max_weight,
                            description: testWeight.description,
                            color: testWeight.color,
                            gender_id: testWeight.gender_id,
                            recommendation_id:  testWeight.recommendation_id // OPCIONAL
                        },
                    };
                },
            }),


            deleteTestWeight: builder.mutation({
                invalidatesTags: ["TestWeight"],
                query: (id) => {
                    return {
                        method: 'DELETE',
                        url: `/delete-test-weight/${id}`,
                    };
                },
            }),
            
        };
    },
});

export const {
    useFetchTestWeightById, useAddTestWeightMutation, useEditTestWeightMutation, useDeleteTestWeightMutation
} = testWeightApi;
export { testWeightApi };
