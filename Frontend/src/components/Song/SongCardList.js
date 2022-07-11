import React from 'react';
import styled from 'styled-components';
import SongCardItem from './SongCard';

function SongCardList({ exploreSong }) {
  exploreSong.sort(() => Math.random() - Math.random()).slice(0, 12);
  const newArray = exploreSong.slice(0,12);
  // console.log(randomArray);

  return (
    <Wrapper className='Grid Grid--smallGutter'>
      {newArray.map((song) => (
        <SongCardItem key={song.songId} song={song} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default React.memo(SongCardList);
