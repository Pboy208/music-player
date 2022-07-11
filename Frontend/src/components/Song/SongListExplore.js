import { useEffect } from "react";
import styled from 'styled-components';
import SongItemExplore from './SongItemExplore';

function SongListExplore({ songChart }) {
  songChart.sort(() => Math.random() - Math.random()).slice(0, 100);
  const newArray = songChart.slice(0, 50);

  return (
    <Wrapper>
      <table
        className="Table Table--hoverable u-backgroundWhite u-textDark u-text200"
        style={{
          width: '100%',
        }}
      >
        <thead>
          <tr>
            <Title scope="col" width="80%">
              Song
            </Title>
            <Title scope="col" width="20%">
              Time
            </Title>
          </tr>
        </thead>
        <tbody>
          {newArray.map((song) => (
            <SongItemExplore key={song.songId} song={song} />
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
`;

const Title = styled.th`
  width: ${(props) => props.width};
`;

export default SongListExplore;
