
import styled from 'styled-components';
import AlbumCardItem from './AlbumCard';

function AlbumCardList() {
  return (
    <Wrapper className='Grid Grid--smallGutter'>
      <AlbumCardItem/>
      <AlbumCardItem/>
      <AlbumCardItem/>
      <AlbumCardItem/>
      <AlbumCardItem/>
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
