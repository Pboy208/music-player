
import styled from 'styled-components';
import SongCardItem from './SongCard';

function SongCardList({ exploreSong }) {
  const newArray = exploreSong.slice(0,12);

  // const shuffled = exploreSong.sort(() => 0.5 - Math.random());
  // const selected = shuffled.slice(0, 12);

  return (
    <Wrapper className='Grid Grid--smallGutter'>
      {newArray.map((song) => (
        <SongCardItem key={song.songID} song={song} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default SongCardList;
