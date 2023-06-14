import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const gendersApi = createApi({
    reducerPath: 'genders',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010',
    }),
    endpoints(builder) {
        return {

            fetchGenders: builder.query({
                providesTags: ["Genders"],
                query: () => {
                    return {
                        url: '/get-genders',
                        method: 'GET',
                    };
                },
            }),                        

            fetchGenderById: builder.query({
                providesTags: ["Genders"],
                query: (id) => {
                    return {
                        url: `/get-gender/${id}`,
                        method: 'GET',
                    };
                },
            }),

            addGender: builder.mutation({
                invalidatesTags: ["Genders"],
                query: (gender) => {
                    return {
                        method: 'POST',
                        url: '/add-gender',
                        body: {
                            gender: gender.gender,
                        },
                    };
                },
            }),
                

            editGender: builder.mutation({
                invalidatesTags: ["Genders"],
                query: (gender) => {
                    return {
                        method: 'PUT',
                        url: `/edit-gender/${gender.gender_id}`,
                        body: {
                            gender: gender.gender,
                        },
                    };
                },
            }),


            deleteGender: builder.mutation({
                invalidatesTags: ["Genders"],
                query: (id) => {
                    return {
                        method: 'DELETE',
                        url: `/delete-gender/${id}`,
                    };
                },
            }),

        };
    },
});
export const {
    useFetchGendersQuery, useFetchGenderByIdQuery, useAddGenderMutation, useEditGenderMutation, useDeleteGenderMutation
} = gendersApi;
export { gendersApi };
