import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const albumSlice = createSlice({
  name: 'album',
  initialState: {
    isLoading: false,
    byIds: {},
    ids: [],
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    resetAlbumState: (state) => {
      state.byIds = {};
      state.ids = [];
      state.isLoading = false;
    },
  },
});

export default albumSlice.reducer;
export const { resetAlbumState } = albumSlice.actions;
