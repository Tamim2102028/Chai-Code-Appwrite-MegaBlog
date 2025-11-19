import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth.Slice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
