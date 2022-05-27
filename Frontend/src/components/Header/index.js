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
import { SearchBox } from '@ahaui/react';

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

function Header() {
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
      <SearchBar placeholder="Search..." sizeControl="small" />
      <ActionsWrapper>
        <ThemeToggler onClick={toggleTheme}>
          <MdBrightnessMedium style={{ fontSize: 40, position: 'relative' }} />
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
  min-height: 60px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  padding: var(--small-space) var(--big-space);
`;

const SearchBar = styled(SearchBox)`
  width: 40%;
`;

const ActionsWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const Dropdown = styled.div`
  width: 40px;
  color: black;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

const ThemeToggler = styled.div`
  width: 40px;
  color: black;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export default Header;
