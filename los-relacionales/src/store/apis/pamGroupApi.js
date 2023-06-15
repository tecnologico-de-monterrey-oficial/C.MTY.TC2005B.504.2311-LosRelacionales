import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pamGroupApi = createApi({
    reducerPath: 'pamGroup',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchPamGroups: builder.query({
                providesTags: ["pamGroup"],
                query: () => {
                    return {
                        url: `get-pam-groups`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchPamGroupById: builder.query({
                providesTags: ["pamGroup"],
                query: (id) => {
                    return {
                        url: `get-pam-group/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchPamGroupByParentId: builder.query({
                providesTags: ["pamGroup"],
                query: (id) => {
                    return {
                        url: `get-pam-group-by-group-parent/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addPamGroup: builder.mutation({
                invalidatesTags: ["pamGroup"],
                query: (pamGroup) => {
                    return {
                        url: 'add-pam-group',
                        method: 'POST',
                        body: {
                            group_type_id: pamGroup.group_type_id,
                            group_name: pamGroup.group_name,
                            group_parent_id: pamGroup.group_parent_id,
                        },
                    };
                }
            }),
            editPamGroup: builder.mutation({
                invalidatesTags: ["pamGroup"],
                query: (pamGroup) => {
                    return {
                        url: `edit-pam-group/${pamGroup.id}`,
                        method: 'PUT',
                        body: {
                            group_type_id: pamGroup.group_type_id,
                            group_name: pamGroup.group_name,
                            group_parent_id: pamGroup.group_parent_id,
                        },
                    };
                }
            }),
            deletePamGroup: builder.mutation({
                invalidatesTags: ["pamGroup"],
                query: (id) => {
                    return {
                        url: `delete-pam-group/${id}`,
                        method: 'DELETE',
                    }
                }
            }),
        }
    }
});

export const { useFetchPamGroupsQuery, useFetchPamGroupByIdQuery, useFetchPamGroupByParentIdQuery,
    useAddPamGroupMutation, useEditPamGroupMutation, useDeletePamGroupMutation } = pamGroupApi;

export {pamGroupApi};