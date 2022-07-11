import { useState } from 'react';
import styled from 'styled-components';
import MusicPlayer from 'components/MusicPlayer';
import NavigationBar from 'components/NavigationBar';
import PlayerQueue from 'components/PlayerQueue';
import Header from 'components/Header';

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Wrapper className="layout">
      <Body>
        {isMenuOpen && <NavigationBar close={() => setIsMenuOpen(false)} />}
        <AppWrapper>
          <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          <App>{children}</App>
        </AppWrapper>
        {/* <PlayerQueue /> */}
      </Body>
      <MusicPlayer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  /* min-width: 600px; */
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  flex: 1 999999;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const AppWrapper = styled.div`
  flex: 1 1 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = styled.div`
  flex: 1 999999 auto;
  height: calc(
    100vh - max(10vh, 60px) - 60px
  ); // 60px is the height of the header, max is height of the music player
  /* height: calc(100vh-60px); */
  width: 100%;
  overflow: auto;
`;

export default Layout;
