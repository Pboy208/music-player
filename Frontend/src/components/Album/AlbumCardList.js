
import { getExploreAlbum } from 'store/albumSlice';
import styled from 'styled-components';
import AlbumCardItem from './AlbumCard';

function AlbumCardList({ exploreAlbum }) {
  const newArray = exploreAlbum.slice(0,10);
  return (
    <Wrapper className='Grid Grid--smallGutter'>
      {newArray.map((album) => (
        <AlbumCardItem key={album.albumID} album={album} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.th`
  width: ${(props) => props.width};
`;

export default AlbumCardList;
