/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

function SongInfo({ song, size }) {
  if (!song) return (
    <Wrapper>
      <SkeletonAvatar size={size} />
    </Wrapper>
  );


  return (
    <Wrapper>
      <Avatar src={song.urlImage} size={size}/>
      <Info>
        <Title size={size}>{song.name}</Title>
        <Artist to={`/profile/${song.authorId}`} size={size}>{song.name_artist}</Artist>
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

const SkeletonAvatar = styled.div`
  height: ${(props) => (props.size === 'medium' ? '40px' : '60px')};
  width: ${(props) => (props.size === 'medium' ? '40px' : '60px')};
  /* margin: ${(props) => (props.size === 'medium' ? '2px' : '4px')}; */
  border: 1px solid white;
  border-radius: 4px;
  overflow: hidden;
  background-color: grey;
`;


const Avatar = styled.img`
  height: ${(props) => (props.size === 'medium' ? '40px' : '60px')};
  width: ${(props) => (props.size === 'medium' ? '40px' : '60px')};
  /* margin: ${(props) => (props.size === 'medium' ? '2px' : '4px')}; */
  border: 1px solid white;
  border-radius: 4px;
  overflow: hidden;
  display: var(--avatar-music-info-display);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  flex: 1 1;
  /* gap: 4px; */
`;

const Title = styled.span`
  font-weight: 400;
  font-size: ${(props) => (props.size === 'medium' ? '16px' : '18px')};
`;

const Artist = styled(Link)`
  width: fit-content;
  font-size: ${(props) => (props.size === 'medium' ? '12px' : '12px')};
`;

export default SongInfo;
