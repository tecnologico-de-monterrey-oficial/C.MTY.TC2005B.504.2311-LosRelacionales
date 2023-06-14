import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pamsApi = createApi({
    reducerPath: 'pams',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010',
    }),
    endpoints(builder) {
        return {
            fetchTestResultById: builder.query({
                providesTags: ["Results"],
                query: (id) => {
                    return {
                        url: `/get-pam-test-result/${id}`,
                        method: 'GET',
                    };
                },
            }),
            fetchColorFromResultId: builder.query({
                providesTags: ["Results"],
                query: (id) => {
                    return {
                        url: `/get-color-from-test-result/${id}`,
                        method: 'GET',
                    };
                },
            }),
            fetchDescriptionFromResultId: builder.query({
                providesTags: ["Results"],
                query: (id) => {
                    return {
                        url: `/get-description-from-test-result/${id}`,
                        method: 'GET',
                    };
                },
            }),
            
            
            addTestResult: builder.mutation({
                invalidatesTags: ["Results"],
                query: (testResult) => {
                    return {
                        method: 'POST',
                        url: '/add-pam-test-result',
                        body: {
                            pam_test_id: testResult.pam_test_id,
                            test_id: testResult.test_id,
                            test_result: testResult.test_result, 
                        },
                    };
                },
            }),
            editTestResult: builder.mutation({
                invalidatesTags: ["Results"],
                query: (testResult) => {
                    return {
                        method: 'PUT',
                        url: `/edit-pam-test-result/${testResult.pam_test_result_id}`,
                        body: {
                            pam_test_id: testResult.pam_test_id,
                            test_id: testResult.test_id,
                            test_result: testResult.test_result, 
                        },
                    };
                },
            }),
            deleteTestResult: builder.mutation({
                invalidatesTags: ["Results"],
                query: (id) => {
                    return {
                        method: 'DELETE',
                        url: `/delete-pam-test-result/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchPamsQuery, useAddPamMutation, useEditPamMutation, useDeletePamMutation } = pamsApi;
export { pamsApi };
