import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customer: null,
    loading: false,
    error: null,
};

const customerSlice = createSlice({
    name: "customer",

    initialState,

    reducers: {

        getCustomerRequest: (state) => {
            state.loading = true;
            state.error = null;
        },

        getCustomerSuccess: (state, action) => {
            state.loading = false;
            state.customer = action.payload;
            state.error = null;
        },

        getCustomerFailure: (state, action) => {
            state.loading = false;
            state.customer = null;
            state.error = action.payload;
        },

        clearCustomer: (state) => {
            state.customer = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    getCustomerRequest,
    getCustomerSuccess,
    getCustomerFailure,
    clearCustomer,
} = customerSlice.actions;

export default customerSlice.reducer;