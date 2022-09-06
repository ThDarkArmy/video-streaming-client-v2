import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createChannel, getChannel, getMyChannel, updateChannel, deleteMyChannel, getVideosByChannel } from "./Channel.api";


const initialState = {
    getChannelStatus: "idle" | "loading" | "success" | "failed",
    createChannelStatus: "idle" | "loading" | "success" | "failed",
    updateChannelStatus: "idle" | "loading" | "success" | "failed",
    deleteChannelStatus: "idle" | "loading" | "success" | "failed",
    channelVideosStatus: "idle" | "loading" | "success" | "failed",
    getChannelResponse: null,
    createChannelResponse: null,
    updateChannelResponse: null,
    deleteChannelResponse: null,
    channelVideos: null,
    getChannelError: null,
    createChannelError: null,
    updateChannelError: null,
    deleteChannelError: null,
    channelVideosError: "",
}


export const getChannelThunk = createAsyncThunk("channels/getChannel", async (id, { rejectWithValue })=> {
    try{
        return await getChannel(id);
    }catch(error){
        if (error.toJSON().message === "Network Error") {
            return rejectWithValue( error.toJSON());
          } else {
            return rejectWithValue(error.response.data);
          }
    }
})

export const getChannelVideosThunk = createAsyncThunk("channels/getChannelVideos", async(channelId)=> {
    try{
        return await getVideosByChannel(channelId);
    }catch(error){
        if(error.response){
            throw error.response.data;
        }else{
            throw error;
        }
    }
})

export const getMyChannelThunk = createAsyncThunk("channels/getMyChannel", async ({ rejectWithValue })=> {
    try{
        return await getMyChannel();
    }catch(error){
        if (error.toJSON().message === "Network Error") {
            return rejectWithValue( error.toJSON());
          } else {
            return rejectWithValue(error.response.data);
          }
    }
})


export const createChannelThunk = createAsyncThunk("channels/createChannel", async (channelData, { rejectWithValue })=> {
    try{
        return await createChannel(channelData);
    }catch(error){
        if (error.toJSON().message === "Network Error") {
            return rejectWithValue( error.toJSON());
          } else {
            return rejectWithValue(error.response.data);
          }
    }
})


export const updateChannelThunk = createAsyncThunk("channels/updateChannel", async (channelData, { rejectWithValue })=> {
    try{
        return await updateChannel(channelData);
    }catch(error){
        if (error.toJSON().message === "Network Error") {
            return rejectWithValue( error.toJSON());
          } else {
            return rejectWithValue(error.response.data);
          }
    }
})

export const deleteChannelThunk = createAsyncThunk("channels/deleteChannel", async ({ rejectWithValue })=> {
    try{
        return await deleteMyChannel();
    }catch(error){
        if (error.toJSON().message === "Network Error") {
            return rejectWithValue( error.toJSON());
          } else {
            return rejectWithValue(error.response.data);
          }
    }
})


export const channelSlice = createSlice({
    name: "channel",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getChannelThunk.pending, state=> {
            state.getChannelStatus="loading";
        })
        .addCase(getChannelThunk.fulfilled, (state, action)=> {
            state.getChannelStatus="success";
            state.getChannelResponse=action.payload.body;
        })
        .addCase(getChannelThunk.rejected, (state, action)=> {
            state.getChannelStatus="failed";
            state.getChannelError = action.payload;
        })
        .addCase(getChannelVideosThunk.pending, state=>{
            state.channelVideosStatus = "loading";
        })
        .addCase(getChannelVideosThunk.fulfilled, (state, action) => {
            state.channelVideosStatus = "success";
            state.channelVideos = action.payload.body;
        })
        .addCase(getChannelVideosThunk.rejected, (state, action) => {
            state.channelVideosStatus = "failed";
            state.channelVideosError = action.error.message;
        })
    }
})


export default channelSlice.reducer;