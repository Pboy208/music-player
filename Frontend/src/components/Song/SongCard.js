import styled from 'styled-components';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { playSongNow } from 'store/songSlice';
import { useDispatch } from 'react-redux';

// const song = {
//   song_id: '3aa5f4ee-7b51-1bc6-e032-03c92da59c43',
//   name: 'Mây Hồng Đưa Lối',
//   times_play: 181000,
//   album_id: '20d0b9f3-3e65-1639-9d7d-e8c757976496',
//   name_artist: 'Bâu',
//   artist_id: '27341263-7cbf-193d-781d-bb3758d4bac0',
//   urlImage:
//     'https://res.cloudinary.com/mp320212/image/upload/Image/66f5692b-4709-2091-4dc1-f32a102323e6',
//   urlMusic:
//     'https://res.cloudinary.com/mp320212/video/upload/Music/6fb6c197-6413-7508-38c7-21b180c0988f',
// };

function SongCardItem({ song }) {
  const dispatch = useDispatch();
  return (
    <Wrapper className="sm:u-size4of12 md:u-size3of12 lg:u-size2of10 xl:u-size1of6" onClick={() => dispatch(playSongNow(song))}>
      <Card onClick={null}>
        <Media>
          <Img src={song.urlImage} size="medium" alt=''/>
          <div className='play'><BsFillPlayCircleFill/></div>
        </Media>
        <Content>
          <SongName>{song.name}</SongName>
          <SongArtist>{song.name_artist}</SongArtist>
        </Content>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 5px;
  padding-bottom: 20px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-shadow: 0px 0px 7px #c3c1c1;
  border-radius: inherit;
  &:hover {
    cursor: pointer;
  }
  &:hover .play{display:block}
`;

const Media = styled.div`
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .play{
    position: absolute;
    display: none;
    z-index:100;
    transition: 300ms;
    font-size: 50px;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    &:hover {
      filter: invert(1);
    }
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

const PlayBtn = styled.button`
  position : absolute;
  display:none;
  top:20%; 
  width:40px;
  margin:0 auto; left:0px;
  right:0px;
  z-index:100;
  &:hover {display:block;}
`;

export default SongCardItem;
