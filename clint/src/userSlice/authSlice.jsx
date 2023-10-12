import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    activeUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { activeUser } = authSlice.actions;

export default authSlice.reducer;
