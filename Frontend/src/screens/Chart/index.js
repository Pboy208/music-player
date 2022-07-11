import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SongListChart from 'components/Song/SongChart';
import { Tab, Dropdown, Button, Icon, Form } from '@ahaui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getChart } from 'store/songSlice';



function Chart() {
  // const [currentTab, setCurrentTab] = useState('liked');
  // const { chartList: songChart } = useSelector((state) => state.song);
  const [ songChart, setSongChart] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchSongList = () => {
  //     dispatch(getChart());
  //   };
  //   fetchSongList();
  // }, []);

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
//   albumID: "e96707e6-e952-11ec-aa89-0a5de61f8cc6"
// artistID: "73a854d5-fc89-11ec-aa89-0a5de61f8cc6"
// name: "Hoa hải đường"
// name_artist: "Charlie Puth"
// rank: 1
// songID: "3c8ef4e9-f1f5-11ec-aa89-0a5de61f8cc6"
// timesPlay: 27
// urlImage: "https://res.cloudinary.com/mp320212/image/upload/Image/135aa3ef-7c39-47c4-d0e4-cbefc3792353"
// urlMusic:
  // console.log(songChart);
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
  console.log(transformed);
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
