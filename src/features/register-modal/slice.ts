import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const registerModalSlice = createSlice({
  name: "register-modal",
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

export const { showModal, hideModal } = registerModalSlice.actions;
export default registerModalSlice.reducer;
