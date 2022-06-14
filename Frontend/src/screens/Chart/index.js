import { useState } from 'react';
import styled from 'styled-components';
import SongListChart from 'components/Song/SongChart';
import { Tab, Dropdown, Button, Icon, Form } from '@ahaui/react';

function Chart() {
  // const [currentTab, setCurrentTab] = useState('liked');

  return (
    <Wrapper className="card aligned-center">
      <Header>
        <h1>Chart</h1>
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
      </Header>
      
      <SongListChart />
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
