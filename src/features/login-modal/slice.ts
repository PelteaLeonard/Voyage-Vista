import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const loginModalSlice = createSlice({
  name: "login-modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.open = true;
    },
    hideModal: (state) => {
      state.open = false;
    },
  },
});

export const { showModal, hideModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;
