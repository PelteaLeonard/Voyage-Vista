import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const forgotModalSlice = createSlice({
  name: "forgot-password-modal",
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

export const { showModal, hideModal } = forgotModalSlice.actions;
export default forgotModalSlice.reducer;
