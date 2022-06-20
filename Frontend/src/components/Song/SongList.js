import styled from 'styled-components';
import SongItem from './SongItem';

function SongList() {
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
            <Title scope="col" width="45%">
              Album
            </Title>
            <Title scope="col" width="10%">
              Time
            </Title>
          </tr>
        </thead>
        <tbody>
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
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

export default SongList;
