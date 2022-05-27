import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {
  BsFillFileEarmarkPersonFill,
  BsFillFileEarmarkMusicFill,
  BsBarChartLineFill,
  BsNewspaper,
} from 'react-icons/bs';

function NavigationBar() {
  return (
    <Wrapper>
      <Logo> Music Player</Logo>
      <Navigators>
        <NavLink to="/personal" className="u-flex u-alignItemsCenter u-text500">
          <BsFillFileEarmarkPersonFill />
          Personal
        </NavLink>
        <NavLink to="/explore" className="u-flex u-alignItemsCenter u-text500">
          <BsFillFileEarmarkMusicFill />
          Explore
        </NavLink>
        <NavLink to="/chart" className="u-flex u-alignItemsCenter u-text500">
          <BsBarChartLineFill />
          Chart
        </NavLink>
        <NavLink to="/release" className="u-flex u-alignItemsCenter u-text500">
          <BsNewspaper />
          New release
        </NavLink>
      </Navigators>
      <Playlists />
      <AddPlayListButton>Add new playlist</AddPlayListButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 999999 230px;
  max-width: 230px;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
`;

const Logo = styled.div`
  flex: 1 999999 60px;
  padding: var(--small-space);
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigators = styled.div`
  flex: 1 999999 480px;
  border: 1px solid white;
  padding-bottom: var(--small-space);
  display: flex;
  flex-direction: column;
`;

const Playlists = styled.div`
  flex: 999999 1 auto;
  overflow: auto;
  border: 1px solid white;
  padding-top: var(--small-space);
`;

const AddPlayListButton = styled.div`
  flex: 1 999999 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  padding: 14px 20px;
  text-decoration: none;
  color: var(--text-color);
  gap: 12px;

  &:hover {
    text-decoration: none;
    background-color: gray;
  }
`;

export default NavigationBar;
