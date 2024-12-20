import { createSlice } from '@reduxjs/toolkit';

const logoSlice = createSlice({
  name: 'logo',
  initialState: {
    imgSrc: 'path/to/your/logo.png',
  },
  reducers: {
    setLogoPath: (state, action) => {
      state.imgSrc = action.payload;
    },
  },
});

export const { setLogoPath } = logoSlice.actions;
export default logoSlice.reducer;
