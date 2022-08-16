import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../pages/home/Home.slice";
import playerReducer from "../pages/player/Player.slice";
import authenticationReducer from "../pages/authentication/Authentication.slice";

export const store = configureStore({
  reducer: {
    video: videoReducer,
    player: playerReducer,
    authentication: authenticationReducer,
  },
});


