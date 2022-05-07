import * as React from 'react';
import styled from 'styled-components';
import MusicPlayer from 'components/MusicPlayer';
import NavigationBar from 'components/NavigationBar';
import PlayerQueue from 'components/PlayerQueue';
import Header from 'components/Header';

function Layout({ children }) {
  return (
    <Wrapper>
      <Body>
        <NavigationBar />
        <AppWrapper>
          <Header />
          <App>{children}</App>
        </AppWrapper>
        <PlayerQueue />
      </Body>
      <MusicPlayer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  flex: 1 999999;
  width: 100%;
  height: 100%;
  background-color: grey;
  display: flex;
`;

const AppWrapper = styled.div`
  flex: 1 1 auto;
  height: 100%;
  background-color: grey;
  display: flex;
  flex-direction: column;
`;

const App = styled.div`
  flex: 1 999999 auto;
  height: calc(
    100vh - max(8vh, 60px) - 62px
  ); // 62px is the height of the header, max is height of the music player
  /* height: calc(100vh-60px); */
  width: 100%;
  overflow: auto;
  background-color: black;
`;

export default Layout;
