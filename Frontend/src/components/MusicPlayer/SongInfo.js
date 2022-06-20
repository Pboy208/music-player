/* eslint-disable no-unused-vars */
import styled from 'styled-components';

function SongInfo({ song, size }) {
  return (
    <Wrapper>
      <Avatar src={song.urlImage} size={size} />
      <Info>
        <Title size={size}>{song.name}</Title>
        <Artist size={size}>{song.name_artist}</Artist>
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
  height: ${(props) => (props.size === 'medium' ? '40px' : '60px')};
  width: ${(props) => (props.size === 'medium' ? '40px' : '60px')};
  /* margin: ${(props) => (props.size === 'medium' ? '2px' : '4px')}; */
  border: 1px solid white;
  border-radius: 4px;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  /* gap: 4px; */
`;

const Title = styled.span`
  font-weight: 400;
  font-size: ${(props) => (props.size === 'medium' ? '16px' : '18px')};
`;

const Artist = styled.span`
  font-size: ${(props) => (props.size === 'medium' ? '12px' : '12px')};
`;

export default SongInfo;
