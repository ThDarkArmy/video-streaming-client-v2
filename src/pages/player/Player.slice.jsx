import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getVideoById,
  getAllCommentsByVideo,
  getRecommendedVideos,
} from "./Player.api";

const initialState = {
  video: null,
  recommendedVideos: [],
  comments: [],
  videoStatus: "idle" | "loading" | "success" | "failed",
  recommendedVideoStatus: "idle" | "loading" | "success" | "failed",
  commentStatus: "idle" | "loading" | "success" | "failed",
  error: {},
};

export const getVideoByIdThunk = createAsyncThunk(
  "player/getVideoById",
  async (id) => await getVideoById(id)
);

export const getAllRecommendedVideoThunk = createAsyncThunk(
  "player/getRecommendedVideos",
  async (videoId) => await getRecommendedVideos()
);

export const getAllCommentsByVideoThunk = createAsyncThunk(
  "player/getAllCommentsByVideo",
  async (videoId) => await getAllCommentsByVideo(videoId)
);

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideoByIdThunk.pending, (state) => {
        state.videoStatus = "loading";
      })
      .addCase(getVideoByIdThunk.fulfilled, (state, action) => {
        state.videoStatus = "success";
        state.video = action.payload.body;
      })
      .addCase(getVideoByIdThunk.rejected, (state, action) => {
        state.videoStatus = "failed";
      })
      .addCase(getAllRecommendedVideoThunk.pending, (state) => {
        state.recommendedVideoStatus = "loading";
      })
      .addCase(getAllRecommendedVideoThunk.fulfilled, (state, action) => {
        state.recommendedVideoStatus = "success";
        state.recommendedVideos = action.payload.body;
      })
      .addCase(getAllRecommendedVideoThunk.rejected, (state, action) => {
        state.recommendedVideoStatus = "failed";
      })
      .addCase(getAllCommentsByVideoThunk.pending, (state) => {
        state.commentStatus = "loading";
      })
      .addCase(getAllCommentsByVideoThunk.fulfilled, (state, action) => {
        state.commentStatus = "success";
        state.comments = action.payload.body;
      })
      .addCase(getAllCommentsByVideoThunk.rejected, (state, action) => {
        state.commentStatus = "failed";
      });
  },
});

export default playerSlice.reducer;
