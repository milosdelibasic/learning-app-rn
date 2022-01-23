import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  car: 'Test',
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setCar: (state, action) => {
      state.car = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {actions} = generalSlice;

export const generalSelector = state => state.general;

export default generalSlice.reducer;
