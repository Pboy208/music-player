import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { MdLogout } from 'react-icons/md';

function Header() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Wrapper>
      <SearchBar>SearchBar</SearchBar>
      <ActionsWrapper>
        <ToggleThemeButton>Theme</ToggleThemeButton>
        <UserDropdown>
          <UserAvatar src={user.avatar} />
          <Dropdown>
            <DropdownItem>Logout</DropdownItem>
          </Dropdown>
        </UserDropdown>
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

const SearchBar = styled.div`
  width: 40%;
  border: 1px solid white;
`;

const ActionsWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const ToggleThemeButton = styled.div`
  width: 40px;
  color: black;
  background-color: #fff;
`;

const UserDropdown = styled.div`
  width: 40px;
  color: black;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:hover {
    & > ul {
      display: unset;
    }
  }
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 40px;
  left: -60px;
  display: none;
`;

const DropdownItem = styled.li`
  text-decoration: none;
  list-style: none;
  width: 100px;
  height: 40px;
  background-color: white;
`;
export default Header;
