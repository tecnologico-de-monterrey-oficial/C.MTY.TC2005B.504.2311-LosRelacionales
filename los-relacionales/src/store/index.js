import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { personsApi } from "./apis/personsApi";
import { pamsApi } from './apis/pamsApi';
import { pamGroupApi } from './apis/pamGroupApi';
import { answerApi } from './apis/answerApi';
import { dimensionApi } from './apis/dimensionApi';
import { gendersApi } from './apis/gendersApi';
import { groupTypeApi } from './apis/groupTypeApi';
import { healthDataApi } from './apis/healthDataApi';
import { pamTestAnswerApi } from './apis/pamTestAnswerApi';
import { pamTestApi } from './apis/pamTestApi';
import { questionApi } from './apis/questionApi';
import { recommendationsApi } from './apis/recommendationsApi';
import { rolesApi } from './apis/rolesApi';
import { testApi } from './apis/testApi';
import { testInstructionsApi } from './apis/testInstructionsApi';
import { testWeightsApi } from './apis/testWeightsApi';
import {
    personReducer,
    changeFirstName,
    changeLastName,
    changeGenderId,
    changeRoleId,
    changePhone,
    changeEmail,
    changeCountry,
    changeState,
    changeCity,
    changeAddress1,
    changeAddress2,
    changeZipCode,
    changeBirthDate,
    changeDeceasedDate,
    changeGuardianId,
    changeDoctorId,
    changeBelongsToArchdiocese,
    changePamGroupId,
    changeDioceseId,
    changeZoneId,
    changeDeaneryId,
    changeParishId,
    changePerson,
    resetPerson,
} from "./slices/personsSlice";
// TODO import PAMs and Persons Slices
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
        person: personReducer,
        [personsApi.reducerPath]: personsApi.reducer,
        [pamsApi.reducerPath]: pamsApi.reducer,
        [pamGroupApi.reducerPath]: pamGroupApi.reducer,
        [answerApi.reducerPath]: answerApi.reducer,
        [dimensionApi.reducerPath]: dimensionApi.reducer,
        [gendersApi.reducerPath]: gendersApi.reducer,
        [groupTypeApi.reducerPath]: groupTypeApi.reducer,
        [healthDataApi.reducerPath]: healthDataApi.reducer,
        [pamGroupApi.reducerPath]: pamGroupApi.reducer,
        [pamsApi.reducerPath]: pamsApi.reducer,
        [pamTestAnswerApi.reducerPath]: pamTestAnswerApi.reducer,
        [pamTestApi.reducerPath]: pamTestApi.reducer,
        [questionApi.reducerPath]: questionApi.reducer,
        [recommendationsApi.reducerPath]: recommendationsApi.reducer,
        [rolesApi.reducerPath]: rolesApi.reducer,
        [testApi.reducerPath]: testApi.reducer,
        [testInstructionsApi.reducerPath]: testInstructionsApi.reducer,
        [testWeightsApi.reducerPath]: testWeightsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
            .concat(personsApi.middleware)
            .concat(pamsApi.middleware)
            .concat(pamGroupApi.middleware).concat(answerApi.middleware)
            .concat(dimensionApi.middleware)
            .concat(gendersApi.middleware)
            .concat(groupTypeApi.middleware)
            .concat(healthDataApi.middleware)
            .concat(pamGroupApi.middleware)
            .concat(pamsApi.middleware)
            .concat(pamTestAnswerApi.middleware)
            .concat(pamTestApi.middleware)
            .concat(questionApi.middleware)
            .concat(recommendationsApi.middleware)
            .concat(rolesApi.middleware)
            .concat(testApi.middleware)
            .concat(testInstructionsApi.middleware)
            .concat(testWeightsApi.middleware);
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
    changeFirstName,
    changeLastName,
    changeGenderId,
    changeRoleId,
    changePhone,
    changeEmail,
    changeCountry,
    changeState,
    changeCity,
    changeAddress1,
    changeAddress2,
    changeZipCode,
    changeBirthDate,
    changeDeceasedDate,
    changeGuardianId,
    changeDoctorId,
    changeBelongsToArchdiocese,
    changePamGroupId,
    changeDioceseId,
    changeZoneId,
    changeDeaneryId,
    changeParishId,
    changePerson,
    resetPerson,
};

export {
    useFetchPamsQuery, useFetchPamsByIdQuery, useFetchPamsByGroupQuery, useFetchPamsByDoctorQuery,
    useFetchPamByPersonIdQuery, useAddPamMutation, useEditPamMutation, useDeletePamMutation
} from "./apis/pamsApi";

export {
    useFetchPersonsQuery, useFetchPersonByIdQuery, useFetchPersonsByRoleIdQuery, useFetchPersonByEmailQuery,
    useAddPersonMutation, useEditPersonMutation, useDeletePersonMutation, useFetchPersonByNameQuery,
    useFetchPersonByGenderId
} from "./apis/personsApi";

export {
    useFetchTestWeightByIdQuery, useAddTestWeightMutation, useEditTestWeightMutation, useDeleteTestWeightMutation
} from "./apis/testWeightsApi";

export {
    useFetchRolesQuery, useFetchRoleByIdQuery, useAddRoleMutation, useEditRoleMutation, useDeleteRoleMutation
} from "./apis/rolesApi";

export {
    useFetchGendersQuery, useFetchGenderByIdQuery, useAddGenderMutation, useEditGenderMutation, useDeleteGenderMutation
} from "./apis/gendersApi";

export {
    useFetchRecommsQuery, useFetchRecommByIdQuery, useFetchRecommByTestResultIdQuery, useAddRecommMutation, useEditRecommMutation, useDeleteRecommMutation
} from "./apis/recommendationsApi";

export {
    useFetchAnswerByIdQuery, useFetchAnswerByQuestionIdQuery,
    useAddAnswerMutation, useEditAnswerMutation, useDeleteAnswerMutation
} from "./apis/answerApi";

export {
    useFetchDimensionsQuery, useFetchDimensionByIdQuery,
    useAddDimensionMutation, useEditDimensionMutation, useDeleteDimensionMutation
} from "./apis/dimensionApi";

export {
    useFetchGroupTypesQuery, useFetchGroupTypeByIdQuery, useFetchGroupTypeByParentIdQuery,
    useAddGroupTypeMutation, useEditGroupTypeMutation, useDeleteGroupTypeMutation
} from "./apis/groupTypeApi";

export {
    useFetchHealthDataByPamIdQuery, useAddHealthDataMutation,
    useEditHealthDataMutation, useDeleteHealthDataMutation
} from "./apis/healthDataApi";

export {
    useFetchPamGroupsQuery, useFetchPamGroupByIdQuery, useFetchPamGroupByParentIdQuery,
    useAddPamGroupMutation, useEditPamGroupMutation, useDeletePamGroupMutation
} from "./apis/pamGroupApi";

export {
    useFetchPamTestAnswerByIdQuery, useFetchPamTestAnswerByTestIdQuery,
    useAddPamTestAnswerMutation, useEditPamTestAnswerMutation, useDeletePamTestAnswerMutation
} from "./apis/pamTestAnswerApi";

export {useFetchPamTestByIdQuery, useFetchPamTestByPamIdQuery, 
    useFetchColorFromPamTestQuery, useFetchDescriptionFromPamTestQuery,
    useAddPamTestMutation, useEditPamTestMutation, useDeletePamTestMutation
} from "./apis/pamTestApi";

export {
    useFetchQuestionsQuery, useFetchQuestionByIdQuery, useFetchQuestionByTestIdQuery,
    useAddQuestionMutation, useEditQuestionMutation, useDeleteQuestionMutation
} from "./apis/questionApi";

export {
    useFetchTestsQuery, useFetchTestByIdQuery, useFetchTestByDimensionIdQuery,
    useAddTestMutation, useEditTestMutation, useDeleteTestMutation
} from "./apis/testApi";

export {
    useFetchTestInstructionsQuery, useFetchTestInstructionByIdQuery,
    useAddTestInstructionMutation, useEditTestInstructionMutation, useDeleteTestInstructionMutation
} from "./apis/testInstructionsApi";

export { signUpWithGoogle } from "./thunks/authThunk";