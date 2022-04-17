/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { useReducer } from 'react';
import styled from 'styled-components';
import PlayerControl from './PlayerControl';

const initialSong = {
  urlMusic:
    'https://res.cloudinary.com/mp320212/video/upload/v1649779823/Music/6fb6c197-6413-7508-38c7-21b180c0988f.mp3',
};

const moveNext = () => console.log('next song');
const movePrev = () => console.log('prev song');

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SONG':
      break;
    case 'SET_PLAYBACK':
      return { ...state, isPlayback: !state.isPlayback };
    case 'SET_SHUFFLE':
      return { ...state, isShuffle: !state.isShuffle };
    default:
      return state;
  }
};

function MusicPlayer() {
  const [state, setState] = useReducer(reducer, {
    song: initialSong,
    isShuffle: false,
    isPlayback: false,
  });
  const { song, isShuffle, isPlayback } = state;

  const toggleShuffle = () => setState({ type: 'SET_SHUFFLE' });
  const togglePlayback = () => setState({ type: 'SET_PLAYBACK' });

  return (
    <Wrapper>
      <SongInfo />
      <PlayerControl
        song={song}
        moveNext={moveNext}
        movePrev={movePrev}
        toggleShuffle={toggleShuffle}
        togglePlayback={togglePlayback}
      />
      <AdditionActions />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: max(10vh, 90px);
  width: 100%;
  background-color: black;
  border-top: 1px solid white;
  display: flex;
  gap: 20px;
`;

const SongInfo = styled.div`
  flex: 10 1 auto;
  border-right: 1px solid white;
`;

const AdditionActions = styled.div`
  flex: 10 1 auto;
  border-left: 1px solid white;
`;

export default MusicPlayer;
