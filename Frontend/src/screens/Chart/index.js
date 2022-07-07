import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SongListChart from 'components/Song/SongChart';
import { Tab, Dropdown, Button, Icon, Form } from '@ahaui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getChart } from 'store/songSlice';

function Chart() {
  // const [currentTab, setCurrentTab] = useState('liked');
  const { chartList: songChart } = useSelector((state) => state.song);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongList = () => {
      dispatch(getChart());
    };
    fetchSongList();
  }, []);

  if (!songChart) return null;

  return (
    <Wrapper className="card aligned-center">
      <Header>
        <h1>Chart</h1>
      </Header>
        {/* <Dropdown className="u-paddingTopExtraSmall">
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
        </Dropdown> */}
      <SongListChart songChart={songChart}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

const Header = styled.div`
  padding-top: 20px;
  display: inline-flex;
  gap: 20px;
`;

export default Chart;
