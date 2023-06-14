import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const personsApi = createApi({
    reducerPath: 'persons',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchPersons: builder.query({
                providesTags: ["Persons"],
                query: () => {
                    return {
                        url: 'get-persons',
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchPersonById: builder.query({
                providesTags: ["Persons"],
                query: (id) => {
                    return {
                        url: `get-person/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            // TODO: Revisar que esté bien el parámetro
            fetchPersonsByRoleId: builder.query({
                providesTags: ["Persons"],
                query: (id) => {
                    return {
                        url: `get-persons-by-role/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchPersonByEmail: builder.query({
                providesTags: ["Persons"],
                query: (email) => {
                    return {
                        url: `get-person-by-email/${email}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchPersonByName: builder.query({
                providesTags: ["Persons"],
                query: (name) => {
                    return {
                        url: `get-persons-by-name/${name}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchPersonByGenderId: builder.query({
                providesTags: ["Persons"],
                query: (id) => {
                    return {
                        url: `get-persons-by-gender/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addPerson: builder.mutation({
                invalidatesTags: ["Persons"],
                query: (person) => {
                    return {
                        url: 'add-person',
                        method: 'POST',
                        body: {
                            first_name: person.first_name,
                            last_name: person.last_name,
                            gender_id: person.gender_id,
                            role_id: person.role_id,
                            phone: person.phone,
                            email: person.email,
                            country: person.country,
                            state: person.state,
                            city: person.city,
                            address_1: person.address_1,
                            address_2: person.address_2,
                            zip_code: person.zip_code,
                        },
                    };
                }
            }),
            editPerson: builder.mutation({
                invalidatesTags: ["Persons"],
                query: (person) => {
                    return {
                        url: `edit-person/${person.id}`,
                        method: 'PUT',
                        body: {
                            first_name: person.first_name,
                            last_name: person.last_name,
                            gender_id: person.gender_id,
                            role_id: person.role_id,
                            phone: person.phone,
                            email: person.email,
                            country: person.country,
                            state: person.state,
                            city: person.city,
                            address_1: person.address_1,
                            address_2: person.address_2,
                            zip_code: person.zip_code,
                        },
                    };
                }
            }),
            deletePerson: builder.mutation({
                invalidatesTags: ["Persons"],
                query: (id) => {
                    return {
                        url: `delete-person/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const {
    useFetchPersonsQuery, useFetchPersonByIdQuery, useFetchPersonsByRoleIdQuery, useFetchPersonByEmailQuery,
    useAddPersonMutation, useEditPersonMutation, useDeletePersonMutation, useFetchPersonByNameQuery,
    useFetchPersonByGenderId
} = personsApi;
export default personsApi;