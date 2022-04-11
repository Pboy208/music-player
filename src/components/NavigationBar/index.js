import styled from 'styled-components';

function NavigationBar() {
  return (
    <Wrapper>
      <Navigator />
      <Playlists />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  flex: 1 999999 250px;
  max-width: 250px;
  border-right: 1px solid white;
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
`;

const Navigator = styled.div`
  flex: 1 999999 240px;
  border: 1px solid white;
`;

const Playlists = styled.div`
  flex: 999999 1 240px;
  overflow: auto;
  border: 1px solid white;
`;

export default NavigationBar;
