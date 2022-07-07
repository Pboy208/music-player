import { search } from 'api/postAPIs';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFavoriteSong, getSongChart, toggleLikeSong } from 'api/songAPIs';

const songList = [
  {
    songId: '3aa5f4ee-7b51-1bc6-e032-03c92da59c43',
    name: 'Mây Hồng Đưa Lối',
    author: 'Bâu',
    authorId: '27341263-7cbf-193d-781d-bb3758d4bac0',
    urlImage:
      'https://res.cloudinary.com/mp320212/image/upload/Image/66f5692b-4709-2091-4dc1-f32a102323e6',
    urlMusic:
      'https://res.cloudinary.com/mp320212/video/upload/Music/19305c7c-15bd-1841-df99-4d3edfe18939',
    liked: false,
  },
  {
    songId: '589e28de-7fff-3486-3589-479bce9b28fc',
    name: 'ô Tấm Ngày Nay (OST Tâm…',
    author: 'Hoàng Vương',
    authorId: '1381ce35-168f-779a-f67e-9b9c7c262a46',
    urlImage:
      'https://res.cloudinary.com/mp320212/image/upload/Image/66f5692b-4709-2091-4dc1-f32a102323e6',
    urlMusic:
      'https://res.cloudinary.com/mp320212/video/upload/v1649779823/Music/6fb6c197-6413-7508-38c7-21b180c0988f.mp3',
    liked: false,
  },
  {
    songId: '15faf519-3919-45f4-e8a9-deaf32c96293',
    name: 'You',
    author: 'uky San',
    authorId: '4f6dba62-1d39-48a1-839c-90632a97d71b',
    urlImage:
      'https://res.cloudinary.com/mp320212/image/upload/Image/66f5692b-4709-2091-4dc1-f32a102323e6',
    urlMusic:
      'https://res.cloudinary.com/mp320212/video/upload/Music/6fb6c197-6413-7508-38c7-21b180c0988f',
    liked: true,
  },
];

const initialSong = {
  urlMusic:
    'https://res.cloudinary.com/mp320212/video/upload/v1649779823/Music/1926e050-16c9-3039-fec1-8e252c39bb73',
  timePlays: 181000,
  urlImage:
    'https://cdn.entries.clios.com/styles/clio_aotw_ems_image_details_retina/s3/entry_attachments/image/50/1398/35822/70126/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg?itok=CvqVGEFU',
  name: "I'm Yours",
  author: 'Tro Ly Beo',
  liked: true,
};

export const getLikedList = createAsyncThunk('song/getLikedList', () =>
  getFavoriteSong(),
);

export const getChart = createAsyncThunk('song/chart', () =>
  getSongChart(),
);

export const toggleLike = createAsyncThunk('song/toggleLikeSong', (songId) =>
  toggleLikeSong(songId),
);

const songSlice = createSlice({
  name: 'song',
  initialState: {
    isLoading: false,
    byIds: {},
    ids: [],
    currentlyPlaying: initialSong, // song is playing for now
    playingQueue: songList,
    recentlyPlayed: [],
    likedList: null,
    chartList: []
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
    addSongToQueue: (state, action) => {
      // add vao vi tri dau tien, xong push last ra // todo
      const newSong = action.payload;
      state.playingQueue = state.playingQueue.filter(
        (song) => song.songId !== newSong.songId,
      );
      state.playingQueue = [newSong, ...state.playingQueue];
    },
    nextSongAction: (state, action) => {
      const isShuffle = action.payload;
      const nextIndex = isShuffle
        ? Math.floor(Math.random() * state.playingQueue.length)
        : 0;
      const nextSong = state.playingQueue[nextIndex];

      state.recentlyPlayed = [state.currentlyPlaying, ...state.recentlyPlayed];
      state.currentlyPlaying = nextSong;
      state.playingQueue = state.playingQueue.filter(
        (song) => song.songId !== nextSong.songId,
      );
    },
    prevSongAction: (state) => {
      const prevSong = state.recentlyPlayed[0];

      state.playingQueue = [state.currentlyPlaying, ...state.playingQueue];
      state.currentlyPlaying = prevSong;
      state.recentlyPlayed = [...state.recentlyPlayed];
      state.recentlyPlayed.shift();
    },
    playSongNow: (state, action) => {
      const newSong = action.payload;
      state.playingQueue = state.playingQueue.filter(
        (song) => song.songId !== newSong.songId,
      );
      state.recentlyPlayed = state.recentlyPlayed.filter(
        (song) => song.songId !== newSong.songId,
      );
      state.recentlyPlayed = [state.currentlyPlaying, ...state.recentlyPlayed];
      state.currentlyPlaying = newSong;
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
        ...song
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
} = songSlice.actions;
