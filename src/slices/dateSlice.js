import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    date: new Date(),
  },
  reducers: {
    updateDate: (state) => {
      state.date = new Date();
    },
  },
});

export const { updateDate } = dateSlice.actions;
export default dateSlice.reducer;
