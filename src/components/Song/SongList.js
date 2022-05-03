import styled from 'styled-components';
import SongItem from './SongItem';

function SongList() {
  return (
    <Wrapper>
      <TitlesWrapper>
        <Title flex="10">Song</Title>
        <Title flex="10">Album</Title>
        <Title flex="2">Time</Title>
      </TitlesWrapper>
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`;

const TitlesWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

const Title = styled.p`
  flex: ${(props) => props.flex};
`;

export default SongList;
