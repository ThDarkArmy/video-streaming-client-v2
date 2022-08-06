import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { loadAllVideos } from "./Home.api";

const initialState = {
  videos: [],
  videoStatus: "idle" | "loading" | "success" | "failed",
  error: {},
};

export const loadAllVideosThunk = createAsyncThunk(
  "videos/getAllVideos",
  async () => await loadAllVideos()
);

export const videoSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder.addCase(loadAllVideosThunk.pending, (state, action)=> {
        state.videoStatus = "loading"
    }).addCase(loadAllVideosThunk.fulfilled, (state, action)=> {
        state.videoStatus = "success"
        state.videos = action.payload
    }).addCase(loadAllVideosThunk.rejected, (state, action)=> {
        state.videoStatus = "failed"
        console.log("Video failed", action);
    })
  }
});

export default videoSlice.reducer;
