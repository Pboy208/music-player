import { useCallback, useReducer, useState } from 'react';

const songList = [
  {
    urlMusic:
      'https://res.cloudinary.com/mp320212/video/upload/v1649779823/Music/1926e050-16c9-3039-fec1-8e252c39bb73',
    timePlays: 181000,
    urlImage:
      'https://cdn.entries.clios.com/styles/clio_aotw_ems_image_details_retina/s3/entry_attachments/image/50/1398/35822/70126/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg?itok=CvqVGEFU',
    name: "I'm Yours",
    name_artist: 'Tro Ly Beo',
  },
  {
    song_id: '3aa5f4ee-7b51-1bc6-e032-03c92da59c43',
    name: 'Mây Hồng Đưa Lối',
    times_play: 181000,
    album_id: '20d0b9f3-3e65-1639-9d7d-e8c757976496',
    name_artist: 'Bâu',
    artist_id: '27341263-7cbf-193d-781d-bb3758d4bac0',
    urlImage:
      'https://res.cloudinary.com/mp320212/image/upload/Image/66f5692b-4709-2091-4dc1-f32a102323e6',
    urlMusic:
      'https://res.cloudinary.com/mp320212/video/upload/Music/19305c7c-15bd-1841-df99-4d3edfe18939',
  },
  {
    song_id: '589e28de-7fff-3486-3589-479bce9b28fc',
    name: 'ô Tấm Ngày Nay (OST Tâm…',
    times_play: 181000,
    album_id: '1f74cd3f-6de4-5324-0180-e8e2a817c80e',
    name_artist: 'Hoàng Vương',
    artist_id: '1381ce35-168f-779a-f67e-9b9c7c262a46',
    urlImage:
      'https://res.cloudinary.com/mp320212/image/upload/Image/66f5692b-4709-2091-4dc1-f32a102323e6',
    urlMusic:
      'https://res.cloudinary.com/mp320212/video/upload/v1649779823/Music/6fb6c197-6413-7508-38c7-21b180c0988f.mp3',
  },
  {
    song_id: '15faf519-3919-45f4-e8a9-deaf32c96293',
    name: 'You',
    times_play: 181000,
    album_id: '2de001fe-529b-33ad-0280-e8e2a817c80e',
    name_artist: 'uky San',
    artist_id: '4f6dba62-1d39-48a1-839c-90632a97d71b',
    urlImage:
      'https://res.cloudinary.com/mp320212/image/upload/Image/66f5692b-4709-2091-4dc1-f32a102323e6',
    urlMusic:
      'https://res.cloudinary.com/mp320212/video/upload/Music/6fb6c197-6413-7508-38c7-21b180c0988f',
  },
];

const initialSong = {
  urlMusic:
    'https://res.cloudinary.com/mp320212/video/upload/v1649779823/Music/1926e050-16c9-3039-fec1-8e252c39bb73',
  timePlays: 181000,
  urlImage:
    'https://cdn.entries.clios.com/styles/clio_aotw_ems_image_details_retina/s3/entry_attachments/image/50/1398/35822/70126/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg?itok=CvqVGEFU',
  name: "I'm Yours",
  name_artist: 'Tro Ly Beo',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEXT_SONG':
      return {
        ...state,
        song: action.song,
        currentSongIndex: action.currentSongIndex,
      };
    case 'SET_PREV_SONG':
      return {
        ...state,
        song: action.song,
        currentSongIndex: state.currentSongIndex - 1,
      };
    case 'SET_PLAYBACK':
      return { ...state, isPlayback: !state.isPlayback };
    case 'SET_SHUFFLE':
      return { ...state, isShuffle: !state.isShuffle };
    default:
      return state;
  }
};

const useGetSong = () => {
  const [state, setState] = useReducer(reducer, {
    song: initialSong,
    currentSongIndex: 0,
    isShuffle: false,
    isPlayback: false,
  });
  const { song, currentSongIndex, isShuffle, isPlayback } = state;

  const getNextSong = useCallback(() => {
    const nextIndex = isShuffle
      ? Math.floor(Math.random() * songList.length)
      : (currentSongIndex + 1) % songList.length;
    const nextSong = songList[nextIndex];
    setState({
      type: 'SET_NEXT_SONG',
      song: nextSong,
      currentSongIndex: nextIndex,
    });
  }, [currentSongIndex, isShuffle]);

  const getPrevSong = useCallback(() => {
    const prevSong =
      songList[(currentSongIndex - 1 + songList.length) % songList.length];
    setState({ type: 'SET_PREV_SONG', song: prevSong });
  }, [currentSongIndex]);

  const toggleShuffle = useCallback(
    () => setState({ type: 'SET_SHUFFLE' }),
    [],
  );

  const togglePlayback = useCallback(
    () => setState({ type: 'SET_PLAYBACK' }),
    [],
  );

  return {
    togglePlayback,
    toggleShuffle,
    isPlayback,
    isShuffle,
    song,
    getNextSong,
    getPrevSong,
  };
};

export default useGetSong;
