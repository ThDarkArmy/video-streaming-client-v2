import axios from "axios";

const BASE_URL = "http://localhost:5678/"

export const signup = async (signupData)=> {
    const { data } = await axios.post(`${BASE_URL}auth/signup`, signupData);
    return data;
}


export const login = async (loginData) => {
    const { data } = await axios.post(`${BASE_URL}auth/login`, loginData);
    return data;
}

export const resetPassword = async (resetPasswordData) => {
    const { data } = await axios.post(`${BASE_URL}auth/reset-password`, resetPasswordData);
    return data;
}