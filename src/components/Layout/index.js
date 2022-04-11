import * as React from 'react';
import styled from 'styled-components';
import MusicPlayer from 'components/MusicPlayer';
import NavigationBar from 'components/NavigationBar';
import FriendList from 'components/FriendList';

function Layout({ children }) {
  return (
    <Wrapper>
      <Body>
        <NavigationBar />
        <App>{children}</App>
        <FriendList />
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

const App = styled.div`
  flex: 1 1 auto;
  height: 100%;
  overflow: auto;
`;

export default Layout;
