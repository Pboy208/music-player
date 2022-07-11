import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tab } from '@ahaui/react';
import SongCardList from 'components/Song/SongCardList';
import AlbumCardList from 'components/Album/AlbumCardList';
import { Link } from 'react-router-dom';

function Explore() {
  const [currentTab, setCurrentTab] = useState('liked');
  const [ exploreSong, setExploreSong ] = useState([]);
  const [ exploreAlbum, setExploreAlbum ] = useState([]);
  const [ exploreArtist, setExploreArtist ] = useState([]);

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

    fetch("http://localhost:8888/album/explore/album", requestOptions)
      .then((response) => response.json())
      .then((result) => result.data.map((val, index, array) => array[array.length - 1 - index]))
      .then((result) => setExploreAlbum(result))
      .catch((error) => console.log("error", error));

    fetch("http://localhost:8888/album/explore/artist", requestOptions)
      .then((response) => response.json())
      .then((result) => result.data.map((val, index, array) => array[array.length - 1 - index]))
      .then((result) => setExploreArtist(result))
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
      artistId: artistID,
      name,
      nameArtist,
      songId: songID,
      urlImage,
      urlMusic
    }));
  if (!transformedSong) return null;

  return (
    <Wrapper className="card aligned-center">
      <h1>Explorer</h1>
      <NewSong>
        <div style={{display: "inline-flex"}}>
          <h3>New release</h3>
          <Link style={{ marginLeft: "20px",padding: "5px",fontSize: "16px", fontWeight: "600"}} to="/explore/song">More</Link>
        </div>
        <SongCardList exploreSong={transformedSong}/>
      </NewSong>
      <NewAlbum>
        <h3>New album arrived</h3>
        <AlbumCardList exploreAlbum={exploreAlbum} />
      </NewAlbum>
      {/* <Artist>
        <h3>New artist feature</h3>
        <ArtistCardList />
      </Artist> */}
      
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
`;
const NewSong = styled.div`
  display: flex;
  flex-direction: column;
`;
const NewAlbum = styled.div`
  display: flex;
  flex-direction: column;
`;
const Artist = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Explore;
