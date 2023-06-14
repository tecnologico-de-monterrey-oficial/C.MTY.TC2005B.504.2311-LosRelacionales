import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const groupTypeApi = createApi({
    reducerPath: 'groupType',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchGroupTypes: builder.query({
                providesTags: ["groupType"],
                query: () => {
                    return {
                        url: `get-group-types`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchGroupTypeById: builder.query({
                providesTags: ["groupType"],
                query: (id) => {
                    return {
                        url: `get-group-type/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchGroupTypeByParentId: builder.query({
                providesTags: ["groupType"],
                query: (id) => {
                    return {
                        url: `get-group-type-by-parent/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addGroupType: builder.mutation({
                invalidatesTags: ["groupType"],
                query: (groupType) => {
                    return {
                        url: 'add-group-type',
                        method: 'POST',
                        body: {
                            group_type: groupType.group_type,
                            parent_group_type_id: groupType.parent_group_type_id,
                        },
                    };
                }
            }),
            editGroupType: builder.mutation({
                invalidatesTags: ["groupType"],
                query: (groupType) => {
                    return {
                        url: `edit-group-type/${groupType.id}`,
                        method: 'PUT',
                        body: {
                            group_type: groupType.group_type,
                            parent_group_type_id: groupType.parent_group_type_id,
                        },
                    };
                }
            }),
            deleteGroupType: builder.mutation({
                invalidatesTags: ["groupType"],
                query: (id) => {
                    return {
                        url: `delete-group-type/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const { useFetchGroupTypesQuery, useFetchGroupTypeByIdQuery, useFetchGroupTypeByParentIdQuery,
    useAddGroupTypeMutation, useEditGroupTypeMutation, useDeleteGroupTypeMutation } = groupTypeApi;

export default groupTypeApi;