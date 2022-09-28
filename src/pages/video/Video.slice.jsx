import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadVideo, editVideo, getVideo, deleteVideo } from "./Video.api";

const initialState = {
  getVideoStatus: "idle" | "loading" | "success" | "failed",
  uploadVideoStatus: "idle" | "loading" | "success" | "failed",
  editVideoStatus: "idle" | "loading" | "success" | "failed",
  deleteVideoStatus: "idle" | "loading" | "success" | "failed",
  uploadVideoResponse: null,
  deleteVideoResponseMessage: "",
  editVideoResponse: null,
  getVideoResponse: null,
  uploadVideoError: "",
  deleteVideoError: "",
  editVideoError: "",
  getVideoError: "",
};

export const uploadVideoThunk = createAsyncThunk(
  "videos/uploadVideo",
  async (videoData) => {
    try {
      await uploadVideo(videoData);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const editVideoThunk = createAsyncThunk(
  "videos/editVideo",
  async (videoData, id) => {
    try {
      await editVideo(videoData, id);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const deleteVideoThunk = createAsyncThunk(
  "videos/deleteVideo",
  async (id) => {
    try {
      await deleteVideo(id);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const getVideoThunk = createAsyncThunk("videos/getVideo", async (id) => {
  try {
    await getVideo(id);
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
});

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadVideoThunk.pending, (state) => {
        state.uploadVideoStatus = "loading";
      })
      .addCase(uploadVideoThunk.fulfilled, (state, action) => {
        state.uploadVideoStatus = "success";
        state.uploadVideoResponse = action.payload.body;
      })
      .addCase(uploadVideoThunk.rejected, (state, action) => {
        state.uploadVideoStatus = "failed";
        state.uploadVideoError = action.error.message;
      })
      .addCase(editVideoThunk.pending, (state) => {
        state.editVideoStatus = "loading";
      })
      .addCase(editVideoThunk.fulfilled, (state, action) => {
        state.editVideoStatus = "success";
        state.editVideoResponse = action.payload.body;
      })
      .addCase(editVideoThunk.rejected, (state, action) => {
        state.editVideoStatus = "failed";
        state.editVideoError = action.error.message;
      })
      .addCase(deleteVideoThunk.pending, (state) => {
        state.deleteVideoStatus = "loading";
      })
      .addCase(deleteVideoThunk.fulfilled, (state, action) => {
        state.deleteVideoStatus = "success";
        state.deleteVideoResponseMessage = action.payload.body;
      })
      .addCase(deleteVideoThunk.rejected, (state, action) => {
        state.deleteVideoStatus = "failed";
        state.deleteVideoError = action.error.message;
      })
      .addCase(getVideoThunk.pending, (state) => {
        state.getVideoStatus = "loading";
      })
      .addCase(getVideoThunk.fulfilled, (state, action) => {
        state.getVideoStatus = "success";
        state.getVideoResponse = action.payload.body;
      })
      .addCase(getVideoThunk.rejected, (state, action) => {
        state.getVideoStatus = "failed";
        state.getVideoError = action.error.message;
      });
  },
});

export default videoSlice.reducer;
