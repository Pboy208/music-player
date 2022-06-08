import { useState } from 'react';
import styled from 'styled-components';
import SongList from 'components/Song/SongList';
import { Tab } from '@ahaui/react';

function Personal() {
  const [currentTab, setCurrentTab] = useState('liked');

  return (
    <Wrapper className="card aligned-center">
      <Tab current={currentTab} onSelect={setCurrentTab}>
        <Tab.Item eventKey="liked">Liked</Tab.Item>
        <Tab.Item eventKey="album">Album</Tab.Item>
      </Tab>
      <SongList />
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
