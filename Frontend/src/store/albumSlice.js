import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAlbumExplore} from 'api/albumAPIs';

export const getExploreAlbum = createAsyncThunk('album/explore/album', () =>
  getAlbumExplore(),
);

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
  extraReducers: {
    [getExploreAlbum.fulfilled]: (state, action) => {
      state.exploreALbumList = action.payload.data.map((album) => ({
        ...album
      }));
    },
  }
});

export default albumSlice.reducer;
export const { resetAlbumState } = albumSlice.actions;
