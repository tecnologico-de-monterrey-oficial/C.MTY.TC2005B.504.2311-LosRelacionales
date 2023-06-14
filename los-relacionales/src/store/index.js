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


export { 
    useFetchPamsQuery, useFetchPamsByIdQuery, useFetchPamsByGroupQuery, useFetchPamsByDoctorQuery, 
    useAddPamMutation, useEditPamMutation, useDeletePamMutation 
} from "./apis/pamsApi";

export {
    useFetchPersonsQuery, useFetchPersonByIdQuery, useFetchPersonsByRoleIdQuery, useFetchPersonByEmailQuery,
    useAddPersonMutation, useEditPersonMutation, useDeletePersonMutation
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

export { signUpWithGoogle } from "./thunks/authThunk";