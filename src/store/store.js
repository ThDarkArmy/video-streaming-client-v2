import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../pages/home/Home.slice"

export const store = configureStore({
  reducer: {
    video: videoReducer
  },
});


