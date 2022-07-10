import { useEffect } from "react";
import styled from 'styled-components';
import SongItemChart from './SongItemChart';

function compare( a, b ) {
  if ( a.rank < b.rank ){
    return -1;
  }
  if ( a.rank > b.rank ){
    return 1;
  }
  return 0;
}
function SongListChart({ songChart }) {
  
  // const reversed = songChart.reverse();
  songChart.sort(compare);
  const newArray = songChart.slice(0, 20);

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
            <Title scope="col" width="10%">
              Rank
            </Title>
            <Title scope="col" width="80%">
              Song
            </Title>
            {/* <Title scope="col" width="40%">
              Album
            </Title> */}
            <Title scope="col" width="10%">
              Time
            </Title>
          </tr>
        </thead>
        <tbody>
          {newArray.map((song) => (
            <SongItemChart key={song.songID} song={song} />
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

export default SongListChart;
