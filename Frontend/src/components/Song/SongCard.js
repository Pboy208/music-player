import React from 'react';
import styled from 'styled-components';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import useClick from 'hooks/useClick';

function SongCardItem({ song }) {
  const click = useClick({ song });
  return (
    <Wrapper className="sm:u-size4of12 md:u-size3of12 lg:u-size2of10 xl:u-size1of6">
      <Card>
        <Media onClick={click}>
          {(song.urlImage === "" || song.urlImage === undefined) ?
            (
              <Img src="/assets/img/no-image.png" size="medium" alt=''/>
            ):(
              <Img src={song.urlImage} size="medium" alt=''/>
            )
          }
          <div className='play'><BsFillPlayCircleFill/></div>
        </Media>
        <Content>
          <SongName onClick={click}>{song.name}</SongName>
          <SongArtist to={`/profile/${song.artistId}`}>{song.nameArtist}</SongArtist>
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
  z-index: 1;
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
  gap: 0px;
`;

const SongName = styled.div`
  padding: 4px;
  min-height: 40px;
  display:flex;
  align-items: center;
  color: inherit;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  overflow: auto;
  @media (max-width: 768px) {
    min-height: 80px;
  }
`;

const SongArtist = styled(Link)`
  color: inherit;
  font-family: sans-serif;
  font-size: 16px;
  padding: 4px;
  margin-bottom:0;
  display:flex;
  align-items: center;
  min-height: 40px;
  &:hover {color: blue;}
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

export default React.memo(SongCardItem);
