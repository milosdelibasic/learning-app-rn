import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: null,
  content: null,
  buttonDivider: false,
  buttonDirection: "horizontal",
  btn1: null,
  btn2: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = true;
      state.title = action.payload?.title;
      state.content = action.payload?.content;
      state.buttonDivider = action.payload?.buttonDivider;
      state.buttonDirection = action.payload?.buttonDirection || "horizontal";
      state.btn1 = action.payload?.btn1;
      state.btn2 = action.payload?.btn2;
    },
    close: state => {
      state.isOpen = false;
      state.title = null;
      state.content = null;
      state.buttonDivider = false;
      state.buttonDirection = "horizontal";
      state.btn1 = null;
      state.btn2 = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions } = modalSlice;

export const modalSelector = state => state.modal;

export default modalSlice.reducer;
