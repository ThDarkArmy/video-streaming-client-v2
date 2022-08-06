import axios from "axios";

const BASE_URL = "http://localhost:5678/";

export const loadAllVideos = async () => {
  const { data } = await axios.get(`${BASE_URL}videos/all`);
  return data;
};

export const loadVideoById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}videos/by-id/${id}`);
  return data;
};

export const addVideo = async (video) => {
  const { data } = await axios.post(`${BASE_URL}videos`, video, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};

// export const editVideo = async (id, data) => {
//   const { data } = await axios.delete(`${BASE_URL}videos/${id}`, data);
//   return data;
// };

export const deleteVideo = async (id) => {
  const { data } = await axios.delete(`${BASE_URL}videos/${id}`);
  return data;
};
