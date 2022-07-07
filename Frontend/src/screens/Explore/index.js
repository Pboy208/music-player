import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tab } from '@ahaui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getExploreSong, getSongExplore } from 'store/songSlice';
import SongCardList from 'components/Song/SongCardList';
import AlbumCardList from 'components/Album/AlbumCardList';

function Explore() {
  const [currentTab, setCurrentTab] = useState('liked');
  const { exploreSongList: exploreSong } = useSelector((state) => state.song);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongList = () => {
      dispatch(getExploreSong());
    };
    fetchSongList();
  }, []);
  
  if (!exploreSong) return null;
  window.localStorage.setItem(key, value);
  window.localStorage.getItem(key);
  return (
    <Wrapper className="card aligned-center">
      <h1>Explorer</h1>
      <NewSong>
        <h3>New release</h3>
        {/* <SongCardList exploreSong={exploreSong}/> */}
      </NewSong>
      <NewAlbum>
        <h3>New album arrived</h3>
        <AlbumCardList/>
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
