import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSucccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;

        },
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutStart: (state) => {
            state.isFetching = true;
        },
        logoutSuccess: (state ) => {
            state.isFetching = false;
            state.currentUser.token = null;
        },
        logoutFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    },
});

export const { loginStart,
    loginSucccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure } = userSlice.actions;
export default userSlice.reducer;