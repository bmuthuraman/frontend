import { call, put, takeLatest, } from "redux-saga/effects";
import { getCustomerRequest, getCustomerSuccess, getCustomerFailure, } from "../slices/customerSlice";
import {getCustomerByIdApi, } from "../../api/customerApi";

function* getCustomerWorker(action) {
    try {
        const customer = yield call(getCustomerByIdApi, action.payload);
        console.log("CUSTOMER RESPONSE:", customer);
        yield put(getCustomerSuccess(customer));

    } catch (error) {
        console.error("CUSTOMER API ERROR:", error);
        const message = error?.response?.data?.message ?? "Unable to load customer details";
        yield put(getCustomerFailure(message));
    }
}

export default function* customerSaga() {
    yield takeLatest(getCustomerRequest.type,getCustomerWorker);
}