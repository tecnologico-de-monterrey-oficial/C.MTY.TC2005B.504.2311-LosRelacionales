import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const answerApi = createApi({
    reducerPath: 'answer',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchAnswerById: builder.query({
                providesTags: ["answer"],
                query: (id) => {
                    return {
                        url: `get-answer/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchAnswerByQuestionId: builder.query({
                providesTags: ["answer"],
                query: (id) => {
                    return {
                        url: `get-answer-by-question/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addAnswer: builder.mutation({
                invalidatesTags: ["answer"],
                query: (answer) => {
                    return {
                        url: 'add-answer',
                        method: 'POST',
                        body: {
                            question_id: answer.question_id,
                            answer: answer.answer,
                            weight: answer.weight,
                        },
                    };
                }
            }),
            editAnswer: builder.mutation({
                invalidatesTags: ["answer"],
                query: (answer) => {
                    return {
                        url: `edit-answer/${answer.id}`,
                        method: 'PUT',
                        body: {
                            question_id: answer.question_id,
                            answer: answer.answer,
                            weight: answer.weight,
                        },
                    };
                }
            }),
            deleteAnswer: builder.mutation({
                invalidatesTags: ["answer"],
                query: (id) => {
                    return {
                        url: `delete-answer/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});
export const { useFetchAnswerByIdQuery, useFetchAnswerByQuestionIdQuery,
    useAddAnswerMutation, useEditAnswerMutation, useDeleteAnswerMutation } = answerApi;

export {answerApi};