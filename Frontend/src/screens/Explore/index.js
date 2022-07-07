import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tab } from '@ahaui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getExploreSong, getSongExplore } from 'store/songSlice';
import { getExploreAlbum } from 'store/albumSlice';
import SongCardList from 'components/Song/SongCardList';
import AlbumCardList from 'components/Album/AlbumCardList';

function Explore() {
  const [currentTab, setCurrentTab] = useState('liked');
  const { exploreSongList: exploreSong } = useSelector((state) => state.song);
  const { exploreAlbumList: exploreAlbum } = useSelector((state) => state.album);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongExploreList = () => {
      dispatch(getExploreSong());
    };
    fetchSongExploreList();
  }, []);

  useEffect(() => {
    const fetchAlbumExploreList = () => {
      dispatch(getExploreAlbum());
    };
    fetchAlbumExploreList();
  }, [])
  
  if (!exploreSong) return null;

  return (
    <Wrapper className="card aligned-center">
      <h1>Explorer</h1>
      <NewSong>
        <h3>New release</h3>
        <SongCardList exploreSong={exploreSong}/>
      </NewSong>
      <NewAlbum>
        <h3>New album arrived</h3>
        <AlbumCardList exploreAlbum={exploreAlbum} />
      </NewAlbum>
      
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

export default Explore;
