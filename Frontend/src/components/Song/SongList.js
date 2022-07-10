import styled from 'styled-components';
import SongItem from './SongItem';

function SongList({ songList }) {
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
            <Title scope="col" width="45%">
              Song
            </Title>
            <Title scope="col" width="40%">
              Album
            </Title>
            <Title scope="col" width="10%">
              Time
            </Title>
            <Title scope="col" width="5%" />
          </tr>
        </thead>
        <tbody>
          {songList.map((song) => (
            <SongItem key={song.songId} song={song} />
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  max-width: 800px;
  min-height: 70vh;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.th`
  width: ${(props) => props.width};
`;

export default SongList;
