import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import SongCardItem from './SongCard';

function SongCardList() {
  const [ exploreSong, setExploreSong ] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch("http://localhost:8888/song/explore/song", requestOptions)
      .then((response) => response.json())
      .then((result) => result.data.map((_val, index, array) => array[array.length - 1 - index]))
      .then((result) => setExploreSong(result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!exploreSong) return null;

  const transformedSong = exploreSong.map(
    ({
      name,
      artistID,
      nameArtist,
      songID,
      urlImage,
      urlMusic
    }) => 
    ({ 
      authorId: artistID,
      name,
      author: nameArtist,
      songId: songID,
      urlImage,
      urlMusic
    }));

  transformedSong.sort(() => Math.random() - Math.random()).slice(0, 100);

  const newArray = transformedSong.slice(0,24);

  return (
    <Wrapper className='Grid Grid--smallGutter'>
      {newArray.map((song) => (
        <SongCardItem key={song.songId} song={song} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  flex: wrap;
  @media (max-height: 425px) {
    display: flex;
    justify-content: center;
  }
`;

export default React.memo(SongCardList);
