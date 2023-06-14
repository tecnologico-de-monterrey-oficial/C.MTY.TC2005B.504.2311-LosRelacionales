import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
    authReducer,
    setUser,
    setLoading,
    setError,
    logout,
    setRole,
} from "./slices/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
    },
});

setupListeners(store.dispatch);

export {
    store,
    setUser,
    setLoading,
    setError,
    logout,
    setRole,
};

export { useFetchPamsQuery, useAddPamMutation, useEditPamMutation, useDeletePamMutation } from "./apis/pamsApi";

export {
    useFetchPersonsQuery, useFetchPersonByIdQuery, useFetchPersonsByRoleIdQuery, useFetchPersonByEmailQuery,
    useAddPersonMutation, useEditPersonMutation, useDeletePersonMutation, useFetchPersonByNameQuery,
    useFetchPersonByGenderId
} from "./apis/personsApi";

export { useFetchAnswerByIdQuery, useFetchAnswerByQuestionIdQuery,
    useAddAnswerMutation, useEditAnswerMutation, useDeleteAnswerMutation } from "./apis/answerApi";

export { useFetchDimensionsQuery, useFetchDimensionByIdQuery,
    useAddDimensionMutation, useEditDimensionMutation, useDeleteDimensionMutation } from "./apis/dimensionApi";

export { useFetchGroupTypesQuery, useFetchGroupTypeByIdQuery, useFetchGroupTypeByParentIdQuery,
    useAddGroupTypeMutation, useEditGroupTypeMutation, useDeleteGroupTypeMutation } from "./apis/groupTypeApi";

    export { useFetchHealthDataByPamIdQuery, useAddHealthDataMutation,
        useEditHealthDataMutation, useDeleteHealthDataMutation } from "./apis/healthDataApi";

export { useFetchPamGroupsQuery, useFetchPamGroupByIdQuery, useFetchPamGroupByParentIdQuery,
    useAddPamGroupMutation, useEditPamGroupMutation, useDeletePamGroupMutation } from "./apis/pamGroupApi";

export { useFetchPamTestAnswerByIdQuery, useFetchPamTestAnswerByTestIdQuery,
    useAddPamTestAnswerMutation, useEditPamTestAnswerMutation, useDeletePamTestAnswerMutation } from "./apis/pamTestAnswerApi";

    export { useFetchQuestionsQuery, useFetchQuestionByIdQuery, useFetchQuestionByTestIdQuery,
        useAddQuestionMutation, useEditQuestionMutation, useDeleteQuestionMutation } from "./apis/questionApi";

export { useFetchTestsQuery, useFetchTestByIdQuery, useFetchTestByDimensionIdQuery,
    useAddTestMutation, useEditTestMutation, useDeleteTestMutation } from "./apis/testApi";

export { useFetchTestInstructionsQuery, useFetchTestInstructionByIdQuery,
    useAddTestInstructionMutation, useEditTestInstructionMutation, useDeleteTestInstructionMutation } from "./apis/testInstructionsApi";

export { signUpWithGoogle } from "./thunks/authThunk";