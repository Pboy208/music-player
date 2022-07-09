import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getArtistExplore,
  getFavoriteSong,
  getSongChart,
  getSongExplore,
  toggleLikeSong,
} from 'api/songAPIs';
import { updateSongState } from 'utils/storage';

const initialState = {
  storedState: JSON.parse(localStorage.getItem('songState')),
  isLoading: false,
  currentlyPlaying: null, // song is playing for now
  playingQueue: [],
  recentlyPlayed: [],
  likedList: [],
  userId: null,
};

export const getLikedList = createAsyncThunk('song/getLikedList', () =>
  getFavoriteSong(),
);

export const getChart = createAsyncThunk('song/chart', () => getSongChart());

export const getExploreSong = createAsyncThunk('song/explore/song', () =>
  getSongExplore(),
);

export const getArtistSong = createAsyncThunk('song/explore/artist', () =>
  getArtistExplore(),
);

export const toggleLike = createAsyncThunk('song/toggleLikeSong', (songId) =>
  toggleLikeSong(songId),
);

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    initializeSongState: (state, action) => {
      const userId = action.payload;
      state.userId = userId;
      if (state.storedState) {
        state.currentlyPlaying = state.storedState[userId]?.currentlyPlaying;
        state.playingQueue = state.storedState[userId]?.playingQueue;
        state.recentlyPlayed = state.storedState[userId]?.recentlyPlayed;
      }
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    resetSongState: (state) => {
      state.byIds = {};
      state.ids = [];
      state.isLoading = false;
    },
    addSongToQueue: (state, action) => {
      // add vao vi tri dau tien, xong push last ra // todo
      const newSong = action.payload;
      state.playingQueue = state.playingQueue.filter(
        (song) => song.songId !== newSong.songId,
      );
      state.playingQueue = [newSong, ...state.playingQueue];

      updateSongState({
        ...state.storedState,
        [state.userId]: {
          currentlyPlaying: state.currentlyPlaying,
          playingQueue: state.playingQueue,
          recentlyPlayed: state.recentlyPlayed,
        },
      });
    },
    nextSongAction: (state, action) => {
      if (state.playingQueue.length === 0) return;

      const isShuffle = action.payload;
      const nextIndex = isShuffle
        ? Math.floor(Math.random() * state.playingQueue.length)
        : 0;
      const nextSong = state.playingQueue[nextIndex];

      if (state.currentlyPlaying) {
        state.recentlyPlayed = [
          state.currentlyPlaying,
          ...state.recentlyPlayed,
        ];
      }

      state.currentlyPlaying = nextSong;
      state.playingQueue = state.playingQueue.filter(
        (song) => song.songId !== nextSong.songId,
      );

      updateSongState({
        ...state.storedState,
        [state.userId]: {
          currentlyPlaying: state.currentlyPlaying,
          playingQueue: state.playingQueue,
          recentlyPlayed: state.recentlyPlayed,
        },
      });
    },
    prevSongAction: (state) => {
      if (state.recentlyPlayed.length === 0) return;

      const prevSong = state.recentlyPlayed[0];
      if (state.currentlyPlaying) {
        state.playingQueue = [state.currentlyPlaying, ...state.playingQueue];
      }

      state.currentlyPlaying = prevSong;
      state.recentlyPlayed = [...state.recentlyPlayed];
      state.recentlyPlayed.shift();

      updateSongState({
        ...state.storedState,
        [state.userId]: {
          currentlyPlaying: state.currentlyPlaying,
          playingQueue: state.playingQueue,
          recentlyPlayed: state.recentlyPlayed,
        },
      });
    },
    playSongNow: (state, action) => {
      const newSong = action.payload;
      if (state.currentlyPlaying) {
        if (state.currentlyPlaying.songId === newSong.songId) return;
      }
      
      state.playingQueue = state.playingQueue.filter(
        (song) => song?.songId !== newSong.songId,
      );
      state.recentlyPlayed = state.recentlyPlayed.filter(
        (song) => song?.songId !== newSong.songId,
      );

      if (state.currentlyPlaying) {
        state.recentlyPlayed = [
          state.currentlyPlaying,
          ...state.recentlyPlayed,
        ];
      }

      state.currentlyPlaying = newSong;

      updateSongState({
        ...state.storedState,
        [state.userId]: {
          currentlyPlaying: state.currentlyPlaying,
          playingQueue: state.playingQueue,
          recentlyPlayed: state.recentlyPlayed,
        },
      });
    },
  },
  extraReducers: {
    [getLikedList.fulfilled]: (state, action) => {
      state.likedList = action.payload.data.map((song) => ({
        ...song,
        liked: true,
      }));
    },
    [getChart.fulfilled]: (state, action) => {
      state.chartList = action.payload.data.map((song) => ({
        ...song,
      }));
    },
    [getExploreSong.fulfilled]: (state, action) => {
      state.exploreSongList = action.payload.data.map((song) => ({
        ...song,
      }));
    },
    [getArtistExplore.fulfilled]: (state, action) => {
      state.exploreArtistList = action.payload.data.map((song) => ({
        ...song,
      }));
    },
    [toggleLike.fulfilled]: (state, action) => {
      const songId = action.payload.data;
      if (state.currentlyPlaying.songId === songId) {
        const { liked } = state.currentlyPlaying;
        if (liked) {
          state.likedList = state.likedList.filter(
            (song) => song.songId !== songId,
          );
        } else {
          state.likedList = [state.currentlyPlaying, ...state.likedList];
        }
        state.currentlyPlaying.liked = !liked;
      } else {
        state.likedList = state.likedList.filter(
          (song) => song.songId !== songId,
        );
      }
    },
  },
});

export default songSlice.reducer;
export const {
  resetSongState,
  playSongNow,
  nextSongAction,
  prevSongAction,
  likeSong,
  dislikeSong,
  initializeSongState,
} = songSlice.actions;
