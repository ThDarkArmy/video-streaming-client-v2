import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup, login } from "./Authentication.api";

const initialState = {
  signupResponse: {},
  loginResponse: {},
  signupStatus: "idle" | "loading" | "success" | "failed",
  loginStatus: "idle" | "loading" | "success" | "failed",
  signupError: {},
  loginError: {},
};

export const signupThunk = createAsyncThunk(
  "authentication/signup",
  async (signupData, { rejectWithValue }) => {
    try {
      return await signup(signupData);
    } catch (error) {
      if (error.toJSON().message === "Network Error") {
        return rejectWithValue( error.toJSON());
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const loginThunk = createAsyncThunk(
  "authentication/login",
  async (loginData, { rejectWithValue }) => {
    try {
      return await login(loginData);
    } catch (error) {
      if (error.toJSON().message === "Network Error") {
        return rejectWithValue( error.toJSON());
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.pending, (state) => {
        state.signupStatus = "loading";
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.signupStatus = "success";
        state.signupResponse = action.payload;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.signupStatus = "failed";
        state.signupError = action.payload;
      })
      .addCase(loginThunk.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loginStatus = "success";
        state.loginResponse = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.loginError = action.payload;
      });
  },
});

export default authenticationSlice.reducer;
