import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MdLogout, MdColorLens } from 'react-icons/md';
import { logout } from 'store/authSlice';
import CustomizedDropdown from 'components/common/CustomizedDropdown';
import { SearchBox } from '@ahaui/react';

function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const toggleTheme = () => {
    console.log('theme toggled');
  };

  return (
    <Wrapper>
      <SearchBar placeholder="Search..." sizeControl="small" />
      <ActionsWrapper>
        <ThemeToggler onClick={toggleTheme}>
          <MdColorLens
            style={{ fontSize: 50, position: 'relative', top: -5, left: -5 }}
          />
        </ThemeToggler>
        <Dropdown>
          <CustomizedDropdown
            icon={<UserAvatar size="medium" src={user.avatar} />}
            childrenList={[{ ui: 'Logout', handler: logoutHandler }]}
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
