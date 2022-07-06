import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SongList from 'components/Song/SongList';
import { Tab } from '@ahaui/react';
import { getFavoriteSong } from 'api/songAPIs';
import { getLikedList } from 'store/songSlice';
import { useDispatch, useSelector } from 'react-redux';

function Personal() {
  const [currentTab, setCurrentTab] = useState('liked');
  const { likedList: songList } = useSelector((state) => state.song);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongList = () => {
      dispatch(getLikedList());
    };

    fetchSongList();
  }, []);

  if (!songList) return null;

  return (
    <Wrapper className="card aligned-center">
      <Tab current={currentTab} onSelect={setCurrentTab}>
        <Tab.Item eventKey="liked">Liked</Tab.Item>
        <Tab.Item eventKey="album">Album</Tab.Item>
      </Tab>
      <SongList songList={songList} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export default Personal;
