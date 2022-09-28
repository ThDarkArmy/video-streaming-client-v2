import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createChannel,
  getChannel,
  getMyChannel,
  updateChannel,
  deleteMyChannel,
  getVideosByChannel,
  createPlaylist,
  getAllPlaylistsByChannel,
  getPlaylistById,
  deletePlaylist,
} from "./Channel.api";

const initialState = {
  getChannelStatus: "idle" | "loading" | "success" | "failed",
  createChannelStatus: "idle" | "loading" | "success" | "failed",
  updateChannelStatus: "idle" | "loading" | "success" | "failed",
  deleteChannelStatus: "idle" | "loading" | "success" | "failed",
  channelVideosStatus: "idle" | "loading" | "success" | "failed",
  getAllPlaylistStatus: "idle" | "loading" | "success" | "failed",
  getPlaylistByIdStatus: "idle" | "loading" | "success" | "failed",
  createPlaylistStatus: "idle" | "loading" | "success" | "failed",
  updatePlaylistStatus: "idle" | "loading" | "success" | "failed",
  deletePlaylistStatus: "idle" | "loading" | "success" | "failed",
  playlists: [],
  channel: null,
  createChannelResponse: null,
  updateChannelResponse: null,
  deleteChannelResponse: null,
  channelVideos: null,
  getChannelError: "",
  createChannelError: "",
  updateChannelError: "",
  deleteChannelError: "",
  channelVideosError: "",
  getAllPlaylistError: "",
  createPlaylistError: "",
  updatePlaylistError: "",
  deletePlaylistError: "",
};

export const getChannelThunk = createAsyncThunk(
  "channels/getChannel",
  async (id, { rejectWithValue }) => {
    try {
      return await getChannel(id);
    } catch (error) {
      if (error.toJSON().message === "Network Error") {
        return rejectWithValue(error.toJSON());
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const getChannelVideosThunk = createAsyncThunk(
  "channels/getChannelVideos",
  async (channelId) => {
    try {
      return await getVideosByChannel(channelId);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const getMyChannelThunk = createAsyncThunk(
  "channels/getMyChannel",
  async () => {
    try {
      return await getMyChannel();
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const createChannelThunk = createAsyncThunk(
  "channels/createChannel",
  async (channelData) => {
    try {
      return await createChannel(channelData);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const updateChannelThunk = createAsyncThunk(
  "channels/updateChannel",
  async (channelData) => {
    try {
      return await updateChannel(channelData);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const deleteChannelThunk = createAsyncThunk(
  "channels/deleteChannel",
  async ({ rejectWithValue }) => {
    try {
      return await deleteMyChannel();
    } catch (error) {
      if (error.toJSON().message === "Network Error") {
        return rejectWithValue(error.toJSON());
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const createPlaylistThunk = createAsyncThunk(
  "channels/createPlaylist",
  async (playlistData) => {
    try {
      return await createPlaylist(playlistData);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const updatePlaylistThunk = createAsyncThunk(
    "channels/updatePlaylist",
    async (playlistData) => {
      try {
        return await createPlaylist(playlistData);
      } catch (error) {
        if (error.response) {
          throw error.response.data;
        } else {
          throw error;
        }
      }
    }
  );

export const getAllPlaylistByChannelThunk = createAsyncThunk(
  "channels/getAllPlaylistByChannel",
  async (channelId) => {
    try {
      return await getAllPlaylistsByChannel(channelId);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const getPlaylistByIdThunk = createAsyncThunk(
  "channels/getPlaylistById",
  async (playlistId) => {
    try {
      return await getPlaylistById(playlistId);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const deletePlaylistThunk = createAsyncThunk(
  "channels/deletePlaylist",
  async (playlistId) => {
    try {
      return await deletePlaylist(playlistId);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChannelThunk.pending, (state) => {
        state.getChannelStatus = "loading";
      })
      .addCase(getChannelThunk.fulfilled, (state, action) => {
        state.getChannelStatus = "success";
        state.channel = action.payload.body;
      })
      .addCase(getChannelThunk.rejected, (state, action) => {
        state.getChannelStatus = "failed";
        state.getChannelError = action.error.message;
      })
      .addCase(createChannelThunk.pending, (state) => {
        state.createChannelStatus = "loading";
      })
      .addCase(createChannelThunk.fulfilled, (state, action) => {
        state.createChannelStatus = "success";
        state.channel = action.payload.body;
      })
      .addCase(createChannelThunk.rejected, (state, action) => {
        state.createChannelStatus = "failed";
        state.createChannelError = action.error.message;
      })
      .addCase(getChannelVideosThunk.pending, (state) => {
        state.channelVideosStatus = "loading";
      })
      .addCase(getChannelVideosThunk.fulfilled, (state, action) => {
        state.channelVideosStatus = "success";
        state.channelVideos = action.payload.body;
      })
      .addCase(getChannelVideosThunk.rejected, (state, action) => {
        state.update = "failed";
        state.channelVideosError = action.error.message;
      })
      .addCase(updateChannelThunk.pending, (state) => {
        state.updateChannelStatus = "loading";
      })
      .addCase(updateChannelThunk.fulfilled, (state, action) => {
        state.updateChannelStatus = "success";
        state.channel = action.payload.body;
      })
      .addCase(updateChannelThunk.rejected, (state, action) => {
        state.updateChannelStatus = "failed";
        state.updateChannelError = action.error.message;
      })
      .addCase(deleteChannelThunk.pending, (state) => {
        state.deleteChannelStatus = "loading";
      })
      .addCase(deleteChannelThunk.fulfilled, (state, action) => {
        state.deleteChannelStatus = "success";
        state.deleteChannelResponse = action.payload.body;
      })
      .addCase(deleteChannelThunk.rejected, (state, action) => {
        state.deleteChannelStatus = "failed";
        state.deleteChannelError = action.error.message;
      })
      .addCase(getAllPlaylistByChannelThunk.pending, (state) => {
        state.getAllPlaylistStatus = "loading";
      })
      .addCase(getAllPlaylistByChannelThunk.fulfilled, (state, action) => {
        state.getAllPlaylistStatus = "success";
        state.playlists = action.payload.body;
      })
      .addCase(getAllPlaylistByChannelThunk.rejected, (state, action) => {
        state.getAllPlaylistStatus = "failed";
        state.getAllPlaylistError = action.error.message;
      })
      .addCase(createPlaylistThunk.pending, (state) => {
        state.createPlaylistStatus = "loading";
      })
      .addCase(createPlaylistThunk.fulfilled, (state, action) => {
        state.createPlaylistStatus = "success";
        state.playlists = state.playlists.map((playlist) =>
          playlist._id === action.payload.body._id
            ? action.payload.body
            : playlist
        );
      })
      .addCase(createPlaylistThunk.rejected, (state, action) => {
        state.createPlaylistStatus = "failed";
        state.createPlaylistError = action.error.message;
      })
      .addCase(updatePlaylistThunk.pending, (state) => {
        state.updatePlaylistStatus = "loading";
      })
      .addCase(updatePlaylistThunk.fulfilled, (state, action) => {
        state.updatePlaylistStatus = "success";
        state.playlists = state.playlists.map((playlist) =>
          playlist._id === action.payload.body._id
            ? action.payload.body
            : playlist
        );
      })
      .addCase(updatePlaylistThunk.rejected, (state, action) => {
        state.updatePlaylistStatus = "failed";
        state.updatePlaylistError = action.error.message;
      })
      .addCase(deletePlaylistThunk.pending, (state) => {
        state.deletePlaylistStatus = "loading";
      })
      .addCase(deletePlaylistThunk.fulfilled, (state, action) => {
        state.deletePlaylistStatus = "success";
        state.playlists = state.playlists.filter((playlist) =>
          playlist._id === action.payload.body._id
        );
      })
      .addCase(deletePlaylistThunk.rejected, (state, action) => {
        state.deletePlaylistStatus = "failed";
        state.deletePlaylistError = action.error.message;
      });
  },
});


export default channelSlice.reducer;
