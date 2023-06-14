import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rolesApi = createApi({
    reducerPath: 'roles',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010',
    }),
    endpoints(builder) {
        return {

            fetchRoles: builder.query({
                providesTags: ["Roles"],
                query: () => {
                    return {
                        url: '/get-roles',
                        method: 'GET',
                    };
                },
            }),

            fetchRoleById: builder.query({
                providesTags: ["Roles"],
                query: (id) => {
                    return {
                        url: `/get-role/${id}`,
                        method: 'GET',
                    };
                },
            }),
            
            addRole: builder.mutation({
                invalidatesTags: ["Roles"],
                query: (role) => {
                    return {
                        method: 'POST',
                        url: '/add-role',
                        body: {
                            role: role.role,
                        },
                    };
                },
            }),

            editRole: builder.mutation({
                invalidatesTags: ["Roles"],
                query: (role) => {
                    return {
                        method: 'PUT',
                        url: `/edit-role/${role.role_id}`,
                        body: {
                            role: role.role,
                        },
                    };
                },
            }),

            deleteRole: builder.mutation({
                invalidatesTags: ["Roles"],
                query: (id) => {
                    return {
                        method: 'DELETE',
                        url: `/delete-role/${id}`,
                    };
                },
            }),

        };
    },
});
export const {
    useFetchRolesQuery, useFetchRoleByIdQuery, useAddRoleMutation, useEditRoleMutation, useDeleteRoleMutation
} = rolesApi;
export { rolesApi };
