import {
    call,
    put,
    takeLatest,
} from "redux-saga/effects";

import {
    loginRequest,
    loginSuccess,
    loginFailure,
} from "../slices/authSlice";

import {
    loginApi,
} from "../../api/authApi";


function* loginWorker(action) {

    try {

        const response = yield call(
            loginApi,
            action.payload
        );

        console.log(
            "LOGIN RESPONSE:",
            response
        );


        // Get token
        const token =
            response?.token ??
            response?.accessToken ??
            response?.data?.token ??
            response?.data?.accessToken ??
            null;


        // Get user
        const user =
            response?.user ??
            response?.data?.user ??
            null;


        console.log(
            "TOKEN:",
            token
        );

        console.log(
            "USER:",
            user
        );


        if (!token) {
            throw new Error(
                "Access token was not found in login response"
            );
        }


        // Save token
        localStorage.setItem(
            "accessToken",
            token
        );


        // Save user
        if (user) {
            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );
        }


        // Update Redux
        yield put(
            loginSuccess({
                user,
                token,
            })
        );

    } catch (error) {

        console.error(
            "LOGIN ERROR:",
            error
        );

        const message =
            error?.response?.data?.message ??
            error?.message ??
            "Invalid username or password";

        yield put(
            loginFailure(message)
        );
    }
}


export default function* authSaga() {

    yield takeLatest(
        loginRequest.type,
        loginWorker
    );

}