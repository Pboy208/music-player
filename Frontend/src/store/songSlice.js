import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initialState: {
    isLoading: false,
    byIds: {},
    ids: [],
    currentlyPlaying: null,
    playingQueue: [],
    recentlyPlayed: [],
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    resetSongState: (state) => {
      state.byIds = {};
      state.ids = [];
      state.isLoading = false;
    },
  },
});

export default songSlice.reducer;
export const { resetSongState } = songSlice.actions;
