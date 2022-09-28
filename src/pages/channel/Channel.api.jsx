import axios from "axios";

const BASE_URL = "http://localhost:5678/";

const options = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("JWT_TOKEN"),
  },
};

export const getChannel = async (id) => {
  const { data } = await axios.get(`${BASE_URL}channels/byId/${id}`, {
    headers: { Authorization: localStorage.getItem("JWT_TOKEN") },
  });

  return data;
};

export const getMyChannel = async () => {
  const { data } = await axios.get(`${BASE_URL}channels/my-channel`, options);
  return data;
};

export const getVideosByChannel = async (channelId) => {
  const { data } = await axios.get(`${BASE_URL}videos/by-channel/${channelId}`);
  return data;
};

export const createChannel = async (channelData) => {
  const { data } = await axios.post(
    `${BASE_URL}channels`,
    channelData,
    options
  );
  return data;
};

export const updateChannel = async (channelData) => {
  const { data } = await axios.put(
    `${BASE_URL}channels`,
    JSON.stringify(channelData),
    options
  );
  return data;
};

export const createPlaylist = async (playlistData) => {
  const { data } = axios.post(
    `${BASE_URL}playlists`,
    JSON.stringify(playlistData),
    options
  );
  return data;
};

export const getAllPlaylistsByChannel = async (channelId) => {
  const { data } = await axios.get(`${BASE_URL}playlists/byChannel/${channelId}`, options);
  return data;
};

export const getPlaylistById = async (playlistId) => {
  const { data } = await axios.get(
    `${BASE_URL}playlists/byId/${playlistId}`,
    options
  );
  return data;
};

export const deletePlaylist = async (playlistId) => {
    const { data } = await axios.delete(
      `${BASE_URL}playlists/${playlistId}`,
      options
    );
    return data;
  };


export const deleteMyChannel = async () => {
  const { data } = await axios.delete(`${BASE_URL}channels`, options);
  return data;
};
