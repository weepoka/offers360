import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./userSlice/authSlice";

export const store = configureStore({
  reducer: { user: authSlice },
});
