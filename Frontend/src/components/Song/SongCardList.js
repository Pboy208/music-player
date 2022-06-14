
import styled from 'styled-components';
import SongCardItem from './SongCard';

function SongCardList() {
  return (
    <Wrapper className='Grid Grid--smallGutter'>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
      <SongCardItem/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.th`
  width: ${(props) => props.width};
`;

export default SongCardList;
