import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "person",
    initialState: {
        "first_name": "",
        "last_name": "",
        "gender_id": "",
        "role_id": "",
        "phone": "",
        "email": "",
        "country": "",
        "state": "",
        "city": "",
        "address_1": "",
        "address_2": "",
        "zip_code": ""
    },
    reducers: {
        changeFirstName(state, action) {
            state.first_name = action.payload;
        },
        changeLastName(state, action) {
            state.last_name = action.payload;
        },
        changeGenderId(state, action) {
            state.gender_id = action.payload;
        },
        changeRoleId(state, action) {
            state.role_id = action.payload;
        },
        changePhone(state, action) {
            state.phone = action.payload;
        },
        changeEmail(state, action) {
            state.email = action.payload;
        },
        changeCountry(state, action) {
            state.country = action.payload;
        },
        changeState(state, action) {
            state.state = action.payload;
        },
        changeCity(state, action) {
            state.city = action.payload;
        },
        changeAddress1(state, action) {
            state.address_1 = action.payload;
        },
        changeAddress2(state, action) {
            state.address_2 = action.payload;
        },
        changeZipCode(state, action) {
            state.zip_code = action.payload;
        },
        resetPerson(state) {
            state.first_name = "";
            state.last_name = "";
            state.gender_id = "";
            state.role_id = "";
            state.phone = "";
            state.email = "";
            state.country = "";
            state.state = "";
            state.city = "";
            state.address_1 = "";
            state.address_2 = "";
            state.zip_code = "";
        }
    }
});

export const {
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
    resetPerson
} = personSlice.actions;

export const personReducer = personSlice.reducer;
