import axiosClient from "./axiosClient";

export const createCustomerAddressApi = async ( addressData ) => {
    const response = await axiosClient.post("/customer-address", addressData);
    return response.data;
};