import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SongList from 'components/Song/SongList';
import { Tab } from '@ahaui/react';
import { getFavoriteSong } from 'api/songAPIs';

function Personal() {
  const [currentTab, setCurrentTab] = useState('liked');
  const [songList, setSongList] = useState(null);

  useEffect(() => {
    const fetchSongList = () => {
      getFavoriteSong().then((result) => {
        console.log(result);
        setSongList(result.data.map((song) => ({ ...song, liked: true })));
      });
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
