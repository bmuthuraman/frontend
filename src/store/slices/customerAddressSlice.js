import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: null,
    loading: false,
    error: null,
    success: false,
};

const customerAddressSlice = createSlice({
    name: "customerAddress",

    initialState,

    reducers: {

        // CREATE
        createCustomerAddressRequest: (
            state
        ) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },

        createCustomerAddressSuccess: (
            state,
            action
        ) => {
            state.loading = false;
            state.address = action.payload;
            state.error = null;
            state.success = true;
        },

        createCustomerAddressFailure: (
            state,
            action
        ) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        },

        clearCustomerAddressState: (
            state
        ) => {
            state.address = null;
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },
});

export const {
    createCustomerAddressRequest,
    createCustomerAddressSuccess,
    createCustomerAddressFailure,
    clearCustomerAddressState,
} = customerAddressSlice.actions;

export default customerAddressSlice.reducer;