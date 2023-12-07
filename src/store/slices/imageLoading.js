import { createSlice } from '@reduxjs/toolkit';

const imageLoadedSlice = createSlice({
  name: 'imageLoaded',
  initialState: false,
  reducers: {
    setImageLoaded(state, action) {
      return action.payload;
    }
  }
});

export const { setImageLoaded } = imageLoadedSlice.actions;
export default imageLoadedSlice.reducer;