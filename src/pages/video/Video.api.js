import axios from "axios";

const BASE_URL = "http://localhost:5678/";

const options = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("JWT_TOKEN"),
  },
};

export const getVideo = async (id) => {
  const { data } = await axios.get(`${BASE_URL}videos/byId/${id}`, options);
  return data;
};

export const uploadVideo = async (videoData) => {
  const { data } = await axios.post(`${BASE_URL}videos/upload`, videoData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("JWT_TOKEN"),
    },
  });
  return data;
};

export const editVideo = async (videoData, id) => {
  const { data } = await axios.put(
    `${BASE_URL}videos/${id}`,
    videoData,
    options
  );
  return data;
};

export const deleteVideo = async (id) => {
  const { data } = await axios.delete(`${BASE_URL}videos/${id}`, options);
  return data;
};
