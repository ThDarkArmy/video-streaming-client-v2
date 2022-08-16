import axios from 'axios'

const BASE_URL = "http://localhost:5678/";


export const getVideoById = async (id)=> {
    const { data } = await axios.get(`${BASE_URL}videos/by-id/${id}`);
    return data;
}

export const getRecommendedVideos = async ()=> {
    const { data } = await axios.get(BASE_URL+"videos/all");
    return data;
}

export const getAllCommentsByVideo = async(videoId) => {
    const { data } = await axios.get(BASE_URL+"comments/by-video/"+videoId);
    return data;
}