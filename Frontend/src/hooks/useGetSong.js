import { useCallback, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextSongAction, prevSongAction } from 'store/songSlice';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAYBACK':
      return { ...state, isPlayback: !state.isPlayback };
    case 'SET_SHUFFLE':
      return { ...state, isShuffle: !state.isShuffle };
    default:
      return state;
  }
};

const useGetSong = () => {
  const {
    currentlyPlaying, // song is playing for now
    playingQueue,
    recentlyPlayed,
  } = useSelector((state) => state.song);
  const dispatch = useDispatch();

  const [state, setState] = useReducer(reducer, {
    isShuffle: false,
    isPlayback: false,
  });
  const { isShuffle, isPlayback } = state;

  const getNextSong = useCallback(() => {
    dispatch(nextSongAction(isShuffle));
  }, [dispatch, isShuffle]);

  const getPrevSong = useCallback(() => {
    dispatch(prevSongAction());
  }, [dispatch]);

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
    song: currentlyPlaying,
    getNextSong,
    getPrevSong,
  };
};

export default useGetSong;
