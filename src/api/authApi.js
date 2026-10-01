import axiosClient from "./axiosClient";

export const loginApi = async ({ username, password, }) => {
    const response = await axiosClient.post(
        "/user/login", null, { params: { username, password, }, }
    );
    return response.data;
};