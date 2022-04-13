import styled from 'styled-components';

function NavigationBar() {
  return (
    <Wrapper>
      <Logo> MusicPlayer</Logo>
      <Navigator />
      <Playlists />
      <AddPlayListButton>Add playlist button</AddPlayListButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 999999 250px;
  max-width: 250px;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  flex: 1 999999 40px;
  padding: var(--small-space);
`;

const Navigator = styled.div`
  flex: 1 999999 480px;
  border: 1px solid white;
  padding-bottom: var(--small-space);
`;

const Playlists = styled.div`
  flex: 999999 1 auto;
  overflow: auto;
  border: 1px solid white;
  padding-top: var(--small-space);
`;

const AddPlayListButton = styled.div`
  flex: 1 999999 60px;
`;

export default NavigationBar;
