import { configureStore } from "@reduxjs/toolkit";
import homeVideoReducer from "../pages/home/Home.slice";
import playerReducer from "../pages/player/Player.slice";
import authenticationReducer from "../pages/authentication/Authentication.slice";
import channelReducer from "../pages/channel/Channel.slice";
import videoReducer from "../pages/video/Video.slice";

export const store = configureStore({
  reducer: {
    homeVideo: homeVideoReducer,
    player: playerReducer,
    authentication: authenticationReducer,
    channel: channelReducer,
    video: videoReducer,
  },
});


