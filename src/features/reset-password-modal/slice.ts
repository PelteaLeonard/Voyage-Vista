import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const resetPasswordModalSlice = createSlice({
  name: "reset-password-modal",
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

export const { showModal, hideModal } = resetPasswordModalSlice.actions;
export default resetPasswordModalSlice.reducer;
