import styled from 'styled-components';
import { timeFormatter } from 'utils/formatter';
import SongInfo from 'components/MusicPlayer/SongInfo';

function AlbumCardItem({album}) {
  
  return (
    <Wrapper className="sm:u-size4of12 md:u-size3of12 lg:u-size1of5">
      <Card onClick={null}>
        <Content>
          <SongName>{album.name}</SongName>
        </Content>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 50px;
  padding-bottom: 20px;
  @media (max-width: 576px) {
    min-width: 200px;
  }
`;
const Card = styled.div`
  min-height: 40px;
  @media (max-width: 1440px) {
    min-height: 60px;
  }
  @media (max-width: 1000px) {
    min-height: 80px;
  }
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 0px 7px #c3c1c1;
  &:hover {
    background-color: gray;
    cursor: pointer;
  }
  border-radius: inherit;
`;

const Media = styled.div`
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
const Img = styled.img`
  border-radius: 3px; 
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1;
`;
const SongName = styled.a`
  color: inherit;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  &:hover {
    color: inherit;
    line-height: 1.5;
    font-weight: 600;
  }
`;
const SongArtist = styled.a`
  color: inherit;
  font-family: sans-serif;
  font-size: 16px;
  &:hover {
    color: inherit;
  }
`;

export default AlbumCardItem;
