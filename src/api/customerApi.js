import axiosClient from "./axiosClient";

export const getCustomerByIdApi = async (customerId) => {
    const response = await axiosClient.get( `/customer/${customerId}`);
    return response.data;
};