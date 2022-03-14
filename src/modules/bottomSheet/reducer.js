import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  content: null,
};

export const bottomSheetSlice = createSlice({
  name: "bottomSheet",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    close: state => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions } = bottomSheetSlice;

export const bottomSheetSelector = state => state.bottomSheet;

export default bottomSheetSlice.reducer;
