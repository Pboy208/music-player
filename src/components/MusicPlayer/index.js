import styled from 'styled-components';
import PlayerControl from './PlayerControl';

function MusicPlayer() {
  return (
    <Wrapper>
      <SongInfo />
      <PlayerControl />
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
