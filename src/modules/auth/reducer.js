import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  user: {},
  pending: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: state => {
      state.pending = true;
    },
    registerSuccess: state => {
      state.pending = false;
    },
    isLogin: state => {
      state.pending = true;
    },
    login: state => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      console.log("ac", action.payload);
      state.isLogin = true;
      state.pending = false;
      state.user = action.payload;
    },
    signOut: state => {
      state.user = {};
      state.isLogin = false;
    },

    loginFailed: state => {
      state.isLogin = false;
      state.pending = false;
      state.user = {};
    },
    failed: state => {
      state.pending = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions } = authSlice;

export const authSelector = state => state.auth;

export default authSlice.reducer;
