import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pamTestApi = createApi({
    reducerPath: 'pamTest',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
                fetchPamTestById: builder.query({
                    providesTags: ["pamTest"],
                    query: (id) => {
                        return {
                            url: `get-pam-test/${id}`,
                            params: {},
                            method: 'GET',
                        }
                    }
                }),
                fetchPamTestByPamId: builder.query({
                    providesTags: ["pamTest"],
                    query: (id) => {
                        return {
                            url: `get-pam-test-by-pam/${id}`,
                            params: {},
                            method: 'GET',
                        }
                    }
                }),
                fetchColorFromPamTest: builder.query({
                    providesTags: ["pamTest"],
                    query: (id) => {
                        return {
                            url: `get-color-from-pam-test/${id}`,
                            params: {},
                            method: 'GET',
                        }
                    }
                }),

                fetchDescriptionFromPamTest: builder.query({
                    providesTags: ["pamTest"],
                    query: (id) => {
                        return {
                            url: `get-description-from-pam-test/${id}`,
                            params: {},
                            method: 'GET',
                        }
                    }
                }),

                addPamTest: builder.mutation({
                    invalidatesTags: ["pamTest"],
                    query: (pamTest) => {
                        return {
                            url: 'add-pam-test',
                            method: 'POST',
                            body: {
                                test_id: pamTest.pam_id,
                                test_result: pamTest.test_result,
                                pam_id: pamTest.pam_id,
                                test_date: pamTest.test_date,
                            },
                        };
                    }
                }),

                editPamTest: builder.mutation({
                    invalidatesTags: ["pamTest"],
                    query: (pamTest) => {
                        return {
                            url: `edit-pam-test/${pamTest.id}`,
                            method: 'POST',
                            body: {
                                test_id: pamTest.pam_id,
                                test_result: pamTest.test_result,
                                pam_id: pamTest.pam_id,
                                test_date: pamTest.test_date,
                            },
                        };
                    }
                }),
                
                deletePamTest: builder.mutation({
                    invalidatesTags: ["pamTest"],
                    query: (id) => {
                        return {
                            url: `delete-pam-test/${id}`,
                            method: 'DELETE',
                        };
                    }
                }),
            };
        },
    });

export const {useFetchPamTestByIdQuery, useFetchPamTestByPamIdQuery, useFetchColorFromPamTestQuery, useFetchDescriptionFromPamTestQuery,
    useAddPamTestMutation, useEditPamTestMutation, useDeletePamTestMutation} = pamTestApi;

    export {pamTestApi};