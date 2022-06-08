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

function LogoutUI() {
  return (
    <>
      <MdOutlineLogout style={{ fontSize: 24 }} />
      Logout
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
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const toggleTheme = () => {
    console.log('theme toggled');
  };

  const purchaseVIPHandler = () => {
    console.log('purchase vip clicked');
  };

  const settingHandler = () => {
    console.log('setting clicked');
  };

  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
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
        <SearchBar placeholder="Search..." sizeControl="small" />
      </div>
      <ActionsWrapper>
        <ThemeToggler onClick={toggleTheme}>
          <MdBrightnessMedium style={{ fontSize: 36, position: 'relative' }} />
        </ThemeToggler>
        <Dropdown>
          <CustomizedDropdown
            icon={<UserAvatar size="medium" src={user.avatar} />}
            childrenList={[
              { ui: SettingUI(), handler: settingHandler },
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
`;

const MenuButton = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const ActionsWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const Dropdown = styled.div`
  width: 36px;
  color: black;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

const ThemeToggler = styled.div`
  width: 36px;
  color: black;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export default Header;
