import { createSlice } from "@reduxjs/toolkit";
import { scheduleTokenExpiration, } from "../../utils/tokenManager";

const storedToken = localStorage.getItem("accessToken");
const storedUser = localStorage.getItem("user");

let parsedUser = null;

try {
    parsedUser = storedUser
        ? JSON.parse(storedUser)
        : null;
} catch {
    parsedUser = null;
}

const initialState = {
    isAuthenticated: !!storedToken,
    loading: false,
    user: parsedUser,
    token: storedToken || null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {

        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },

        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        },

        loginFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = action.payload;
        },

        logout: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = null;
        },

    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
} = authSlice.actions;

export default authSlice.reducer;