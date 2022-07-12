import React from 'react';
import styled from 'styled-components';
import SongCardItem from './SongCard';

function SongCardList({ exploreSong }) {
  exploreSong.sort(() => Math.random() - Math.random()).slice(0, 100);
  const newArray = exploreSong.slice(0,24);
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
  flex: wrap;
  @media (max-height: 425px) {
    display: flex;
    justify-content: center;
  }
`;

export default React.memo(SongCardList);
