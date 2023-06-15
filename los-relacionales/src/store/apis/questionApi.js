import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const questionApi = createApi({
    reducerPath: 'question',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchQuestions: builder.query({
                providesTags: ["question"],
                query: () => {
                    return {
                        url: `get-questions`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchQuestionById: builder.query({
                providesTags: ["question"],
                query: (id) => {
                    return {
                        url: `get-question/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchQuestionByTestId: builder.query({
                providesTags: ["question"],
                query: (id) => {
                    return {
                        url: `get-questions-by-test/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addQuestion: builder.mutation({
                invalidatesTags: ["question"],
                query: (question) => {
                    return {
                        url: 'add-question',
                        method: 'POST',
                        body: {
                            test_id: question.test_id,
                            question: question.question,
                            sub_question: question.sub_question,
                        },
                    };
                }
            }),
            editQuestion: builder.mutation({
                invalidatesTags: ["question"],
                query: (question) => {
                    return {
                        url: `edit-question/${question.id}`,
                        method: 'PUT',
                        body: {
                            test_id: question.test_id,
                            question: question.question,
                            sub_question: question.sub_question,
                        },
                    };
                }
            }),
            deleteQuestion: builder.mutation({
                invalidatesTags: ["question"],
                query: (id) => {
                    return {
                        url: `delete-question/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const { useFetchQuestionsQuery, useFetchQuestionByIdQuery, useFetchQuestionByTestIdQuery,
    useAddQuestionMutation, useEditQuestionMutation, useDeleteQuestionMutation } = questionApi;

export {questionApi};