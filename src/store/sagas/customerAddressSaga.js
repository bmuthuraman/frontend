import {
    call,
    put,
    takeLatest,
} from "redux-saga/effects";

import {
    createCustomerAddressRequest,
    createCustomerAddressSuccess,
    createCustomerAddressFailure,
} from "../slices/customerAddressSlice";

import {
    createCustomerAddressApi,
} from "../../api/customerAddressApi";


function* createCustomerAddressWorker(
    action
) {

    try {

        console.log(
            "CREATE ADDRESS REQUEST:",
            action.payload
        );


        const response = yield call(
            createCustomerAddressApi,
            action.payload
        );


        console.log(
            "CREATE ADDRESS RESPONSE:",
            response
        );


        yield put(
            createCustomerAddressSuccess(
                response
            )
        );

    } catch (error) {

        console.error(
            "CUSTOMER ADDRESS API ERROR:",
            error
        );


        const message =
            error?.response?.data?.message ??
            error?.response?.data?.Message ??
            error?.message ??
            "Unable to create customer address";


        yield put(
            createCustomerAddressFailure(
                message
            )
        );
    }
}


export default function* customerAddressSaga() {
    yield takeLatest(
        createCustomerAddressRequest.type,
        createCustomerAddressWorker
    );

}