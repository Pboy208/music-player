import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SongListChart from 'components/Song/SongChart';

function Chart() {
  const [ songChart, setSongChart] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch("http://localhost:8888/song/chart", requestOptions)
      .then((response) => response.json())
      .then((result) => result.data.map((val, index, array) => array[array.length - 1 - index]))
      .then((result) => setSongChart(result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!songChart) return null;
  const transformed = songChart.map(
    ({ albumID,
      artistID,
      name,
      nameArtist,
      rank,
      songID,
      timesPlay,
      urlImage,
      urlMusic
    }) => 
    ({ 
      albumId: albumID ,
      authorId: artistID,
      name,
      author: nameArtist,
      rank,
      songId: songID,
      timesPlay,
      urlImage,
      urlMusic
    }));
  if (!transformed) return null;

  return (
    <Wrapper className="card aligned-center">
      <h1>Chart</h1>
      <h3>Top 20 songs listened</h3>
      {/* <Header>
        <Dropdown className="u-paddingTopExtraSmall">
          <Dropdown.Button variant="secondary" size="small">
            <Button.Icon>
              <Icon size="extraSmall" name="arrowDown"/>
            </Button.Icon>
            <Button.Label>
              Time
            </Button.Label>
          </Dropdown.Button>
          <Dropdown.Container id="123" className="u-paddingVerticalExtraSmall">
            <Dropdown.Item>
              <span className="u-marginLeftExtraSmall">Year</span>
            </Dropdown.Item>
            <Dropdown.Item>
              <span className="u-marginLeftExtraSmall">Month</span>
            </Dropdown.Item>
            <Dropdown.Item>
              <span className="u-marginLeftExtraSmall">Week</span>
            </Dropdown.Item>
          </Dropdown.Container>
        </Dropdown>
      </Header> */}
      <SongListChart songChart={transformed}/>
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
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 0;
  }
`;

// const Header = styled.div`
//   display: inline-flex;
//   gap: 20px;
//   h1 {
//     font-weight: 800px;
//   }
// `;

export default Chart;
