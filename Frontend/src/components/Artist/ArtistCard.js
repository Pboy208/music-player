import React from 'react';
import styled from 'styled-components';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ArtistCardItem({ artist }) {
  return (
    <Wrapper className="sm:u-size1of3 md:u-size1of3 lg:u-size1of5 xl:u-size1of5">
      <Link to={`/profile/${artist.id}`}>
        <Card>
          <Media>
            {(artist.urlImage === "" || artist.urlImage === undefined) ?
              (
                <Img src="/assets/img/no-image.png" size="medium" alt=''/>
              ):(
                <Img src={artist.urlImage} size="medium" alt=''/>
              )
            }
          </Media>
          <Content>
            <ArtistName>{artist.name}</ArtistName>
          </Content>
        </Card>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 5px;
  padding-bottom: 20px;
  @media (max-width: 576px) {
    min-width: 150px;
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-shadow: 0px 0px 7px #c3c1c1;
  border-radius: 100px;
  z-index: 1;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
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
  border-radius: 100px; 
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 0px;
`;

const ArtistName = styled.div`
  padding: 4px;
  min-height: 40px;
  display: flex;
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

export default React.memo(ArtistCardItem);
