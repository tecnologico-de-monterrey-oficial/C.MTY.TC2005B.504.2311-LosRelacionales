import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pamTestAnswerApi = createApi({
    reducerPath: 'pamTestAnswer',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchPamTestAnswerById: builder.query({
                providesTags: ["pamTestAnswer"],
                query: (id) => {
                    return {
                        url: `get-pam-test-answer/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchPamTestAnswerByTestId: builder.query({
                providesTags: ["pamTestAnswer"],
                query: (id) => {
                    return {
                        url: `get-pam-test-answer-by-test/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addPamTestAnswer: builder.mutation({
                invalidatesTags: ["pamTestAnswer"],
                query: (pamTestAnswer) => {
                    return {
                        url: 'add-pam-test-answer',
                        method: 'POST',
                        body: {
                            pam_test_result_id: pamTestAnswer.pam_test_result_id,
                            answer_id: pamTestAnswer.answer_id,
                        },
                    };
                }
            }),
            editPamTestAnswer: builder.mutation({
                invalidatesTags: ["pamTestAnswer"],
                query: (pamTestAnswer) => {
                    return {
                        url: `edit-pam-test-answer/${pamTestAnswer.id}`,
                        method: 'PUT',
                        body: {
                            pam_test_result_id: pamTestAnswer.pam_test_result_id,
                            answer_id: pamTestAnswer.answer_id,
                        },
                    };
                }
            }),
            deletePamTestAnswer: builder.mutation({
                invalidatesTags: ["pamTestAnswer"],
                query: (id) => {
                    return {
                        url: `delete-pam-test-answer/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const { useFetchPamTestAnswerByIdQuery, useFetchPamTestAnswerByTestIdQuery,
    useAddPamTestAnswerMutation, useEditPamTestAnswerMutation, useDeletePamTestAnswerMutation } = pamTestAnswerApi;

export default pamTestAnswerApi;