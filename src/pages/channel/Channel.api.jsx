import axios from "axios";

const BASE_URL = "http://localhost:5678/"

export const getChannel = async (id)=> {
    const { data } = await axios.get(`${BASE_URL}channels/byId/${id}`, { headers: {"Authorization": localStorage.getItem("JWT_TOKEN")}});
    return data;
}

export const getMyChannel = async() => {
    const { data } = await axios.get(`${BASE_URL}channels/my-channel`);
    return data;
}

export const getVideosByChannel = async (channelId) => {
    const { data } = await axios.get(`${BASE_URL}videos/by-channel/${channelId}`)
    return data;
}

export const createChannel = async (channelData) => {
    const { data } = await axios.post(`${BASE_URL}channels`, channelData);
    return data;
}

export const updateChannel = async (channelData) => {
    const { data } = await axios.put(`${BASE_URL}channels`, channelData);
    return data;
}

export const deleteMyChannel = async () => {
    const { data } = await axios.delete(`${BASE_URL}channels`);
    return data;
}