import { useState } from 'react';
import styled from 'styled-components';
import { Tab } from '@ahaui/react';
import SongCardList from 'components/Song/SongCardList';

function Explore() {
  const [currentTab, setCurrentTab] = useState('liked');

  return (
    <Wrapper className="card aligned-center">
      <h1>Explorer</h1>
      <SongCardList/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export default Explore;
