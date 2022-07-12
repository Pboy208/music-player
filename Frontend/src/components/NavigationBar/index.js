import styled from 'styled-components';
import { NavLink as Link, Link as LogoLink } from 'react-router-dom';
import {
  BsFillFileEarmarkPersonFill,
  BsFillFileEarmarkMusicFill,
  BsBarChartLineFill,
  BsBookmarkHeartFill,
} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import {Icon} from "@ahaui/react";

function NavigationBar({ close }) {
  const {
    user: { userID },
  } = useSelector((state) => state.auth);
  return (
    <>
      <div
        className="u-positionFixed u-positionTop u-positionBottom .u-positionLeft u-positionRight u-backgroundLighter	"
        style={{
          width: '100vw',
          height: 'calc(100vh - max(10vh,60px))',
          zIndex: 3,
          opacity: 0.8,
          display: 'var(--navigation-bar-modal-background-display)',
        }}
      />
      <Wrapper
        onBlur={() => {
          console.log('on blur');
          // close();
        }}
      >
        <MenuButton onClick={() => close()}>
          <Icon
            size="small"
            name="menu"
            style={{
              color: 'var(--color-primary)',
            }}
          />
        </MenuButton>
        <Logo
          to="/explore"
          className="u-selectNone u-cursorPointer u-textPrimary"
        >
          <Img src="/MuziIcon.ico" alt="logo" />
          Muzi
        </Logo>
        <Navigators>
          <NavLink
            to={`/profile/${userID}`}
            className="u-flex u-alignItemsCenter u-text200 u-userSelectNone"
          >
            <BsFillFileEarmarkPersonFill style={{ fontSize: '24px' }} />
            Personal
          </NavLink>
          <NavLink
            to="/favorite"
            className="u-flex u-alignItemsCenter u-text200 u-userSelectNone"
          >
            <BsBookmarkHeartFill style={{ fontSize: '24px' }} />
            Favorite
          </NavLink>
          <NavLink
            to="/explore"
            className="u-flex u-alignItemsCenter u-text200 u-userSelectNone"
          >
            <BsFillFileEarmarkMusicFill style={{ fontSize: '24px' }} />
            Explore
          </NavLink>
          <NavLink
            to="/chart"
            className="u-flex u-alignItemsCenter u-text200 u-userSelectNone"
          >
            <BsBarChartLineFill style={{ fontSize: '24px' }} />
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
        {/* <Playlists /> */}
        {/* <AddPlayListButton>Add new playlist</AddPlayListButton> */}
      </Wrapper>
    </>
  );
}

const MenuButton = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: var(--navigation-bar-close-button-display);
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 200px;
  background-color: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Wrapper = styled.div`
  flex: 1 999999 200px;
  min-width: 200px;
  max-width: 200px;
  border-right: 1px solid #dfe1e6;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  position: var(--navigation-bar-position);
  z-index: 3;
  height: 100%;
`;

const Logo = styled(LogoLink)`
  flex: 1 999999 60px;
  max-height: 88px;
  padding: var(--small-space);
  font-size: 48px;
  display: flex;
  justify-content: center;
  color:black;
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
  color: var(--text-navigation-color);
  font-size: 16px;
  gap: 12px;

  &:hover {
    text-decoration: none;
    background-color: var(--background-color-hover);
  }
`;

const Img = styled.img`
  height: 100%;
  border-radius: 50%;
`;

export default NavigationBar;
