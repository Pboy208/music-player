import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {
  BsFillFileEarmarkPersonFill,
  BsFillFileEarmarkMusicFill,
  BsBarChartLineFill,
  BsBookmarkHeartFill,
} from 'react-icons/bs';
import { IoIosPaper } from 'react-icons/io';
import { SiMusicbrainz } from 'react-icons/si';

function NavigationBar() {
  return (
    <Wrapper>
      <Logo className="u-selectNone u-cursorPointer u-textPrimary">
        <SiMusicbrainz
          style={{
            marginRight: 8,
          }}
        />
        mp3
      </Logo>
      <Navigators>
        <NavLink
          to="/personal"
          className="u-flex u-alignItemsCenter u-text200 u-userSelectNone"
        >
          <BsFillFileEarmarkPersonFill style={{fontSize: "24px"}}/>
          Personal
        </NavLink>
        <NavLink
          to="/favorite"
          className="u-flex u-alignItemsCenter u-text200 u-userSelectNone"
        >
          <BsBookmarkHeartFill style={{fontSize: "24px"}}/>
          Favorite
        </NavLink>
        <NavLink
          to="/explore"
          className="u-flex u-alignItemsCenter u-text200 u-userSelectNone"
        >
          <BsFillFileEarmarkMusicFill style={{fontSize: "24px"}}/>
          Explore
        </NavLink>
        <NavLink
          to="/chart"
          className="u-flex u-alignItemsCenter u-text200 u-userSelectNone"
        >
          <BsBarChartLineFill style={{fontSize: "24px"}}/>
          Chart
        </NavLink>
        {/* <NavLink
          to="/release"
          className="u-flex u-alignItemsCenter u-text200 u-userSelectNone"
        >
          <IoIosPaper style={{fontSize: "24px"}}/>
          New release
        </NavLink> */}
      </Navigators>
      <Playlists />
      <AddPlayListButton>Add new playlist</AddPlayListButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 999999 200px;
  min-width: 200px;
  max-width: 200px;
  border-right: 1px solid #dfe1e6;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
`;

const Logo = styled.div`
  flex: 1 999999 60px;
  padding: var(--small-space);
  font-size: 28px;
  display: flex;
  padding-left: 18px;
  /* justify-content: center; */
  align-items: center;
`;

const Navigators = styled.div`
  flex: 1 999999 480px;
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
  padding: 14px 24px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 16px;
  gap: 12px;

  &:hover {
    text-decoration: none;
    background-color: var(--background-color-hover);
  }
`;

export default NavigationBar;
