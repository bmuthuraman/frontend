import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authReducer from "./slices/authSlice";
import customerReducer from "./slices/customerSlice";
import customerAddressReducer from "./slices/customerAddressSlice";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({

    reducer: {
        auth: authReducer,
        customer: customerReducer,
        customerAddress: customerAddressReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),

});

sagaMiddleware.run(rootSaga);

export default store;