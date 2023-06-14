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
    useFetchPams, useFetchPamsById, useFetchPamsByGroup, useFetchPamsByDoctor, useAddPamMutation, 
    useEditPamMutation, useDeletePamMutation
} from "./apis/pamsApi";

export {
    useFetchPersonsQuery, useFetchPersonByIdQuery, useFetchPersonsByRoleIdQuery, useFetchPersonByEmailQuery,
    useAddPersonMutation, useEditPersonMutation, useDeletePersonMutation
} from "./apis/personsApi";

export { 
    useFetchTestResultById, useFetchColorFromResultId, useFetchDescriptionFromResultId, useAddTestResultMutation, 
    useEditTestResultMutation, useDeleteTestResultMutation 
} from "./apis/pamTestResultsApi";

export {
    useFetchTestWeightById, useAddTestWeightMutation, useEditTestWeightMutation, useDeleteTestWeightMutation
} from "./apis/testWeightsApi";


export { signUpWithGoogle } from "./thunks/authThunk";