import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "person",
    initialState: {
        "pam_id": "",
        "person_id": "",
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
        "zip_code": "",
        "birth_date": "",
        "deceased_date": "",
        "guardian_id": 1,
        "doctor_id": 1,
        "belongs_to_archdiocese": false,
        "pam_group_id": 1,
        "diocese_id": 1,
        "zone_id": 1,
        "deanery_id": 1,
        "parish_id": 1,
    },
    reducers: {
        changePamId(state, action) {
            state.pam_id = action.payload;
        },
        changePersonId(state, action) {
            state.person_id = action.payload;
        },
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
        changeBirthDate(state, action) {
            state.birth_date = action.payload;
        },
        changeDeceasedDate(state, action) {
            state.deceased_date = action.payload;
        },
        changeGuardianId(state, action) {
            state.guardian_id = action.payload;
        },
        changeDoctorId(state, action) {
            state.doctor_id = action.payload;
        },
        changeBelongsToArchdiocese(state, action) {
            state.belongs_to_archdiocese = action.payload;
        },
        changePamGroupId(state, action) {
            state.pam_group_id = action.payload;
        },
        changeDioceseId(state, action) {
            state.diocese_id = action.payload;
        },
        changeZoneId(state, action) {
            state.zone_id = action.payload;
        },
        changeDeaneryId(state, action) {
            state.deanery_id = action.payload;
        },
        changeParishId(state, action) {
            state.parish_id = action.payload;
        },
        changePerson(state, action) {
            state.pam_id = action.payload.pam_id;
            state.person_id = action.payload.person_id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.gender_id = action.payload.gender_id;
            state.role_id = action.payload.role_id;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.country = action.payload.country;
            state.state = action.payload.state;
            state.city = action.payload.city;
            state.address_1 = action.payload.address_1;
            state.address_2 = action.payload.address_2;
            state.zip_code = action.payload.zip_code;
            state.birth_date = action.payload.birth_date;
            state.deceased_date = action.payload.deceased_date;
            state.guardian_id = action.payload.guardian_id;
            state.doctor_id = action.payload.doctor_id;
            state.belongs_to_archdiocese = action.payload.belongs_to_archdiocese;
            state.pam_group_id = action.payload.pam_group_id;
            state.diocese_id = action.payload.diocese_id;
            state.zone_id = action.payload.zone_id;
            state.deanery_id = action.payload.deanery_id;
            state.parish_id = action.payload.parish_id;
        },
        resetPerson(state) {
            state.pam_id = "";
            state.person_id = "";
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
            state.birth_date = "";
            state.deceased_date = "";
            state.guardian_id = 1;
            state.doctor_id = 1;
            state.belongs_to_archdiocese = false;
            state.pam_group_id = 1;
            state.diocese_id = 1;
            state.zone_id = 1;
            state.deanery_id = 1;
            state.parish_id = 1;
        }
    }
});

export const {
    changePamId,
    changePersonId,
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
    resetPerson
} = personSlice.actions;

export const personReducer = personSlice.reducer;
