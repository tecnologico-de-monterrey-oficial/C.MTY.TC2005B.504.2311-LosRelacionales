import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pamTestApi = createApi({
    reducerPath: 'pamTest',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
                fetchpamTestById: builder.query({
                    providesTags: ["pamTest"],
                    query: (id) => {
                        return {
                            url: `get-pam-test/${id}`,
                            params: {},
                            method: 'GET',
                        }
                    }
                }),
                fetchpamTestByPamId: builder.query({
                    providesTags: ["pamTest"],
                    query: (id) => {
                        return {
                            url: `get-pam-test-by-pam/${id}`,
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
                                pam_id: pamTest.pam_id,
                                test_date: pamTest.test_date,
                                is_completed: pamTest.is_completed,
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
                                pam_id: pamTest.pam_id,
                                test_date: pamTest.test_date,
                                is_completed: pamTest.is_completed,
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

export const {useFetchpamTestByIdQuery, useFetchpamTestByPamIdQuery,
    useAddPamTestMutation, useEditPamTestMutation, useDeletePamTestMutation} = pamTestApi;

    export default pamTestApi;