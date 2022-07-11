import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SongListExplore from 'components/Song/SongListExplore';
import { Link } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';

function ExploreSong() {
  const [ exploreSong, setExploreSong ] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8888/song/explore/song", requestOptions)
      .then((response) => response.json())
      .then((result) => result.data.map((val, index, array) => array[array.length - 1 - index]))
      .then((result) => setExploreSong(result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!exploreSong) return null;
  const transformed = exploreSong.map(
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
      nameArtist,
      songId: songID,
      urlImage,
      urlMusic
    }));
  if (!transformed) return null;

  return (
    <Wrapper className="card aligned-center">
      <Link to="/explore"><BiChevronLeft/>Return to Explore</Link>
      <h1>Explore song list </h1>
      <SongListExplore songChart={transformed}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  h1 {
    font-weight: 800;
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 0;
  }
`;

export default ExploreSong;
