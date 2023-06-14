import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const testInstructionsApi = createApi({
    reducerPath: 'testInstructions',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.14.255.53:3010/',
    }),
    endpoints(builder) {
        return {
            fetchTestInstructions: builder.query({
                providesTags: ["testInstructions"],
                query: () => {
                    return {
                        url: `get-instructions`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            fetchTestInstructionById: builder.query({
                providesTags: ["testInstructions"],
                query: (id) => {
                    return {
                        url: `get-instruction/${id}`,
                        params: {},
                        method: 'GET',
                    }
                }
            }),
            addTestInstruction: builder.mutation({
                invalidatesTags: ["testInstructions"],
                query: (testInstruction) => {
                    return {
                        url: 'add-instruction',
                        method: 'POST',
                        body: {
                            test_id: testInstruction.test_id,
                            test_instructions_order: testInstruction.test_instructions_order,
                            instruction: testInstruction.instruction,
                        },
                    };
                }
            }),
            editTestInstruction: builder.mutation({
                invalidatesTags: ["testInstructions"],
                query: (testInstruction) => {
                    return {
                        url: `edit-instruction/${testInstruction.id}`,
                        method: 'PUT',
                        body: {
                            test_id: testInstruction.test_id,
                            test_instructions_order: testInstruction.test_instructions_order,
                            instruction: testInstruction.instruction,
                        },
                    };
                }
            }),
            deleteTestInstruction: builder.mutation({
                invalidatesTags: ["testInstructions"],
                query: (id) => {
                    return {
                        url: `delete-instruction/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const { useFetchTestInstructionsQuery, useFetchTestInstructionByIdQuery,
    useAddTestInstructionMutation, useEditTestInstructionMutation, useDeleteTestInstructionMutation } = testInstructionsApi;

export default testInstructionsApi;