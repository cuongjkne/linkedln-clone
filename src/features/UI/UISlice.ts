import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCoverScreenActive: false
};

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    coverScreenShowed(state) {
      state.isCoverScreenActive = true;
    },
    coverScreenHidden(state) {
      state.isCoverScreenActive = false;
    }
  }
});

export const { coverScreenShowed, coverScreenHidden } = UISlice.actions;
export default UISlice.reducer;
