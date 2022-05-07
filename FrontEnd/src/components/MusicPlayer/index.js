/* eslint-disable consistent-return */
import { useReducer } from 'react';
import styled from 'styled-components';
import useGetSong from 'hooks/useGetSong';
import PlayerControl from './PlayerControl';
import SongInfo from './SongInfo';
import AdditionActions from './AdditionActions';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VOLUME':
      return { ...state, volume: action.volume, prevVolume: state.volume };
    default:
      return state;
  }
};

function MusicPlayer() {
  const [state, setState] = useReducer(reducer, {
    volume: 100,
    prevVolume: 100,
  });
  const { volume, prevVolume } = state;
  const {
    togglePlayback,
    toggleShuffle,
    isPlayback,
    isShuffle,
    song,
    getNextSong,
    getPrevSong,
  } = useGetSong();
  console.log('isPlayback', isPlayback);
  const setVolume = (newVolume) =>
    setState({ type: 'SET_VOLUME', volume: newVolume });

  return (
    <Wrapper>
      <SongInfo song={song} />
      <PlayerControl
        song={song}
        moveNext={getNextSong}
        movePrev={getPrevSong}
        toggleShuffle={toggleShuffle}
        togglePlayback={togglePlayback}
        isShuffle={isShuffle}
        isPlayback={isPlayback}
        volume={volume}
      />
      <AdditionActions
        prevVolume={prevVolume}
        volume={volume}
        setVolume={setVolume}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: max(8vh, 60px);
  width: 98%;
  padding: 0 1%;
  background-color: black;
  border-top: 1px solid white;
  display: flex;
  gap: 20px;
`;

export default MusicPlayer;
