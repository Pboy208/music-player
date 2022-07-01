import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdBrightnessMedium,
  MdOutlineLogout,
  MdSettings,
} from 'react-icons/md';
import { RiVipCrownFill } from 'react-icons/ri';
import { logout } from 'store/authSlice';
import CustomizedDropdown from 'components/common/CustomizedDropdown';
import { SearchBox, Button, Icon } from '@ahaui/react';
import { useEffect, useState } from 'react';
import * as songAPIs from 'api/songAPIs';
import SearchBoxDropdown from './SearchBoxDropdown';

function LogoutUI() {
  return (
    <>
      <MdOutlineLogout style={{ fontSize: 24 }} />
      Logout
    </>
  );
}

function ToggleThemeUI() {
  return (
    <>
      <MdBrightnessMedium style={{ fontSize: 24 }} />
      Change theme
    </>
  );
}

function PurchaseVIPUI() {
  return (
    <>
      <RiVipCrownFill style={{ fontSize: 24 }} />
      Purchase VIP
    </>
  );
}

function SettingUI() {
  return (
    <>
      <MdSettings style={{ fontSize: 24 }} />
      Setting
    </>
  );
}

function Header({ setIsMenuOpen, isMenuOpen }) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const searchValueDebounce = setTimeout(() => {
      // songAPIs.search(searchValue).then((res) => {
      //   console.log(res);
      // });
    }, 500);

    return () => {
      clearTimeout(searchValueDebounce);
    };
  }, [searchValue]);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const toggleThemeHandler = () => {
    console.log('theme toggled');
  };

  const purchaseVIPHandler = () => {
    console.log('purchase vip clicked');
  };

  const settingHandler = () => {
    console.log('setting clicked');
  };

  const searchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: 30,
        }}
      >
        <MenuButton onClick={() => setIsMenuOpen((prev) => !prev)}>
          <Icon
            size="small"
            name="menu"
            style={{
              color: isMenuOpen ? 'var(--color-primary)' : 'var(--text-color)',
            }}
          />
        </MenuButton>
        <div
          className="u-positionRelative"
          style={{
            width: '100%',
          }}
        >
          <SearchBar
            placeholder="Search..."
            sizeControl="small"
            onChange={searchChangeHandler}
          />
          {/* <SearchBoxDropdown /> */}
        </div>
      </div>
      <ActionsWrapper>
        <Dropdown>
          <CustomizedDropdown
            icon={<UserAvatar size="medium" src={user.avatar} />}
            childrenList={[
              { ui: SettingUI(), handler: settingHandler },
              { ui: ToggleThemeUI(), handler: toggleThemeHandler },
              { ui: PurchaseVIPUI(), handler: purchaseVIPHandler },
              { ui: LogoutUI(), handler: logoutHandler },
            ]}
          />
        </Dropdown>
      </ActionsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 999999 60px;
  max-height: 60px;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--background-color);
  padding: var(--small-space) var(--big-space);
`;

const SearchBar = styled(SearchBox)`
  width: 40%;
  margin: 0;
`;

const MenuButton = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const ActionsWrapper = styled.div`
  width: 100px;
  height: 32px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const Dropdown = styled.div`
  width: 32px;
  height: 32px;
  color: black;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

const ThemeToggler = styled.div`
  width: 32px;
  height: 32px;
  color: black;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export default Header;
