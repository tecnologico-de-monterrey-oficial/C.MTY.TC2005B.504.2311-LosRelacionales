import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pamsApi = createApi({
    reducerPath: 'pams',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010',
    }),
    endpoints(builder) {
        return {
            fetchPams: builder.query({
                providesTags: ["Pams"],
                query: () => {
                    return {
                        url: '/get-pams',
                        method: 'GET',
                    };
                },
            }),
            fetchPamsById: builder.query({
                providesTags: ["Pams"],
                query: (id) => {
                    return {
                        url: `/get-pam/${id}`,
                        method: 'GET',
                    };
                },
            }),
            fetchPamsByGroup: builder.query({
                providesTags: ["Pams"],
                query: (id) => {
                    return {
                        url: `/get-pams-by-group/${id}`,
                        method: 'GET',
                    };
                },
            }),
            fetchPamsByDoctor: builder.query({
                providesTags: ["Pams"],
                query: (id) => {
                    return {
                        url: `/get-pams-by-doctor/${id}`,
                        method: 'GET',
                    };
                },
            }),
            addPam: builder.mutation({
                invalidatesTags: ["Pams"],
                query: (pam) => {
                    return {
                        method: 'POST',
                        url: '/add-pam',
                        body: {
                            person_id: pam.person_id,
                            birth_date: pam.birth_date,
                            deceased_date: pam.deceased_date,
                            guardian_id: pam.guardian_id,
                            doctor_id: pam.doctor_id,
                            belongs_to_archdiocese: pam.belongs_to_archdiocese,
                            pam_group_id: pam.pam_group_id,
                        },
                    };
                },
            }),
            editPam: builder.mutation({
                invalidatesTags: ["Pams"],
                query: (pam) => {
                    return {
                        method: 'PUT',
                        url: `/edit-pam/${pam.pam_id}`,
                        body: {
                            person_id: pam.person_id,
                            birth_date: pam.birth_date,
                            deceased_date: pam.deceased_date,
                            guardian_id: pam.guardian_id,
                            doctor_id: pam.doctor_id,
                            belongs_to_archdiocese: pam.belongs_to_archdiocese,
                            pam_group_id: pam.pam_group_id,
                        },
                    };
                },
            }),
            deletePam: builder.mutation({
                invalidatesTags: ["Pams"],
                query: (id) => {
                    return {
                        method: 'DELETE',
                        url: `/delete-pam/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchPams, useFetchPamsById, useFetchPamsByGroup, useFetchPamsByDoctor, useAddPam, useEditPam, useDeletePam } = pamsApi;
export { pamsApi };
