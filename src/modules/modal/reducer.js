import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: state => {
      state.isOpen = true;
    },
    close: state => {
      state.isOpen = null;
    },
    addCarModal: state => {
      state.type = "addCar";
      state.isOpen = true;
    },
    plateSelectorModal: state => {
      state.type = "plateSelector";
      state.isOpen = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions } = modalSlice;

export const modalSelector = state => state.modal;

export default modalSlice.reducer;
