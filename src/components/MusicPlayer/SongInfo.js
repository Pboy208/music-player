/* eslint-disable no-unused-vars */
import styled from 'styled-components';

function SongInfo({ song }) {
  return (
    <Wrapper>
      <Avatar src={song.urlImage} />
      <Info>
        <Title>{song.name}</Title>
        <Artist>{song.name_artist}</Artist>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 10 1;
  border-right: 1px solid white;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  margin: 0 10px;
  border: 1px solid white;
  border-radius: 4px;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  gap: 4px;
`;

const Title = styled.p`
  font-size: 22px;
`;

const Artist = styled.p`
  font-size: 14px;
`;

export default SongInfo;
