import { all, fork, } from "redux-saga/effects";
import authSaga from "./authSaga";
import customerSaga from "./customerSaga";
import customerAddressSaga from "./customerAddressSaga";

export default function* rootSaga() {

    yield all([
        fork(authSaga),
        fork(customerSaga),
        fork(customerAddressSaga),
    ]);

}