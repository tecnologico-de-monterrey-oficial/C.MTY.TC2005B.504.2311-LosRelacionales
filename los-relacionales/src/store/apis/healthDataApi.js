import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const healthDataApi = createApi({
    reducerPath: 'healthData',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchHealthDataByPamId: builder.query({
                providesTags: ["healthData"],
                query: (id) => {
                    return {
                        url: `get-health-data-by-pam/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addHealthData: builder.mutation({
                invalidatesTags: ["healthData"],
                query: (healthData) => {
                    return {
                        url: 'add-health-data',
                        method: 'POST',
                        body: {
                            pam_id: healthData.pam_id,
                            weight: healthData.weight,
                            height: healthData.height,
                            blood_type: healthData.blood_type,
                        },
                    };
                }
            }),
            editHealthData: builder.mutation({
                invalidatesTags: ["healthData"],
                query: (healthData) => {
                    return {
                        url: `edit-health-data/${healthData.id}`,
                        method: 'PUT',
                        body: {
                            pam_id: healthData.pam_id,
                            weight: healthData.weight,
                            height: healthData.height,
                            blood_type: healthData.blood_type,
                        },
                    };
                }
            }),
            deleteHealthData: builder.mutation({
                invalidatesTags: ["healthData"],
                query: (id) => {
                    return {
                        url: `delete-health-data/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const { useFetchHealthDataByPamIdQuery, useAddHealthDataMutation,
    useEditHealthDataMutation, useDeleteHealthDataMutation } = healthDataApi;
export default healthDataApi;