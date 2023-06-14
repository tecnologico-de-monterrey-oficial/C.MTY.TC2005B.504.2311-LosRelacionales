import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
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
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware(
            { serializableCheck: false }
        )
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

// export { useFetchPamsQuery, useAddPamMutation, useEditPamMutation, useDeletePamMutation } from "./apis/pamsApi";
// export {
//     useFetchPersonsQuery, useFetchPersonByIdQuery, useFetchPersonsByRoleIdQuery, useFetchPersonByEmailQuery,
//     useAddPersonMutation, useEditPersonMutation, useDeletePersonMutation
// } from "./apis/personsApi";
export { signUpWithGoogle } from "./thunks/authThunk";