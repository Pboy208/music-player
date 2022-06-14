import styled from 'styled-components';
import SongItemChart from './SongItemChart';

function SongChart() {
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
            <Title scope="col" width="40%">
              Song
            </Title>
            <Title scope="col" width="40%">
              Album
            </Title>
            <Title scope="col" width="10%">
              Time
            </Title>
          </tr>
        </thead>
        <tbody>
          <SongItemChart />
          <SongItemChart />
          <SongItemChart />
          <SongItemChart />
          {/* {peopleShow.map((val, index) => {
            return( 
            <tr key={val.ID}>
            <td>{index + 1}</td>    
            <td>{val.nationality}</td>
            <td>{val.username}</td>
            <td>{val.money}  $  <i class="far fa-caret-up"></i></td>
            <td>{val.lastbid}</td>
            <td>{val.newbid} $</td>
            </tr>
            );
          })} */}

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

export default SongChart;
