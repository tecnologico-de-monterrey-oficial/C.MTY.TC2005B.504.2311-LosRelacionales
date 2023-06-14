import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const testApi = createApi({
    reducerPath: 'test',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchTests: builder.query({
                providesTags: ["test"],
                query: () => {
                    return {
                        url: `get-tests`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchTestById: builder.query({
                providesTags: ["test"],
                query: (id) => {
                    return {
                        url: `get-test/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchTestByDimensionId: builder.query({
                providesTags: ["test"],
                query: (id) => {
                    return {
                        url: `get-test-by-dimension/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addTest: builder.mutation({
                invalidatesTags: ["test"],
                query: (test) => {
                    return {
                        url: 'add-test',
                        method: 'POST',
                        body: {
                            dimension_id: test.dimension_id,
                            test_name: test.test_name,
                            self_test: test.self_test,
                        },
                    };
                }
            }),
            editTest: builder.mutation({
                invalidatesTags: ["test"],
                query: (test) => {
                    return {
                        url: `edit-test/${test.id}`,
                        method: 'PUT',
                        body: {
                            dimension_id: test.dimension_id,
                            test_name: test.test_name,
                            self_test: test.self_test,
                        },
                    };
                }
            }),
            deleteTest: builder.mutation({
                invalidatesTags: ["test"],
                query: (id) => {
                    return {
                        url: `delete-test/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const { useFetchTestsQuery, useFetchTestByIdQuery, useFetchTestByDimensionIdQuery,
    useAddTestMutation, useEditTestMutation, useDeleteTestMutation } = testApi;
export default testApi;