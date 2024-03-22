import instance from "../utils/instance";

export const signinRequset = async (data) => {
    const response = await instance.post("/auth/signin", data);
    return response
}