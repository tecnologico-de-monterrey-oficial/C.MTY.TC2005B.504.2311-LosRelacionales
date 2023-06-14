import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const dimensionApi = createApi({
    reducerPath: 'dimension',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchDimensions: builder.query({
                providesTags: ["dimension"],
                query: () => {
                    return {
                        url: `get-dimensions`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchDimensionById: builder.query({
                providesTags: ["dimension"],
                query: (id) => {
                    return {
                        url: `get-dimension/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addDimension: builder.mutation({
                invalidatesTags: ["dimension"],
                query: (dimension) => {
                    return {
                        url: 'add-dimension',
                        method: 'POST',
                        body: {
                            dimension: dimension.dimension,
                        },
                    };
                }
            }),
            editDimension: builder.mutation({
                invalidatesTags: ["dimension"],
                query: (dimension) => {
                    return {
                        url: `edit-dimension/${dimension.id}`,
                        method: 'PUT',
                        body: {
                            dimension: dimension.dimension,
                        },
                    };
                }
            }),
            deleteDimension: builder.mutation({
                invalidatesTags: ["dimension"],
                query: (id) => {
                    return {
                        url: `delete-dimension/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const { useFetchDimensionsQuery, useFetchDimensionByIdQuery,
    useAddDimensionMutation, useEditDimensionMutation, useDeleteDimensionMutation } = dimensionApi;
export default dimensionApi;