import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { personsApi } from "./apis/personsApi";
import { pamsApi } from './apis/pamsApi';
import { pamGroupApi } from './apis/pamGroupApi';
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
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
            .concat(personsApi.middleware)
            .concat(pamsApi.middleware)
            .concat(pamGroupApi.middleware)
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
    useFetchTestResultByIdQuery, useFetchColorFromResultIdQuery, useFetchDescriptionFromResultIdQuery,
    useAddTestResultMutation, useEditTestResultMutation, useDeleteTestResultMutation
} from "./apis/pamTestResultsApi";

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