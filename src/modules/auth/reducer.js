import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  user: {},
  pending: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogin: state => {
      state.pending = true;
    },
    login: state => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.isLogin = true;
      state.pending = false;
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {actions} = authSlice;

export const authSelector = state => state.auth;

export default authSlice.reducer;
