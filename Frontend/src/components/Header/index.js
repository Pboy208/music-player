import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <SearchBar>SearchBar</SearchBar>
      <ActionsWrapper>
        <ToggleThemeButton>Theme</ToggleThemeButton>
        <UserDropdown>User</UserDropdown>
      </ActionsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 999999 40px;
  min-height: 40px;
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
`;
export default Header;
