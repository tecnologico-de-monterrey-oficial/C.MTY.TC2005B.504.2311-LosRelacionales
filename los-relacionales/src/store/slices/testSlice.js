import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: "test",
    initialState: {
        "test_id": "",
        "dimension_id": "",
        "test_name": "",
        "self_test": false
    },
    reducers: {
        changeTestId(state, action) {
            state.test_id = action.payload;
        },
        changeDimensionId(state, action) {
            state.dimension_id = action.payload;
        },
        changeTestName(state, action) {
            state.test_name = action.payload;
        },
        changeSelfTest(state, action) {
            state.self_test = action.payload;
        },
        changeTest(state, action) {
            state.test_id = action.payload.test_id;
            state.dimension_id = action.payload.dimension_id;
            state.test_name = action.payload.test_name;
            state.self_test = action.payload.self_test;
        },
        resetTest(state) {
            state.test_id = "";
            state.dimension_id = "";
            state.test_name = "";
            state.self_test = false;
        },
    },
});

export const {
    changeTestId,
    changeDimensionId,
    changeTestName,
    changeSelfTest,
    changeTest,
    resetTest,
} = testSlice.actions;

export const testReducer = testSlice.reducer;