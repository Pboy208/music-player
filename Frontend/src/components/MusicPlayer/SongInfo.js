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
  height: ${(props) => (props.size === 'medium' ? '40px' : '50px')};
  width: ${(props) => (props.size === 'medium' ? '40px' : '50px')};
  margin: ${(props) => (props.size === 'medium' ? '5px' : '10px')};
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

const Title = styled.span`
  font-size: ${(props) => (props.size === 'medium' ? '16px' : '22px')};
`;

const Artist = styled.span`
  font-size: ${(props) => (props.size === 'medium' ? '12px' : '14px')};
`;

export default SongInfo;
