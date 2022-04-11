import styled from 'styled-components';

function FriendList() {
  return (
    <Wrapper>
      <Header>
        <Title> Friend activity</Title>
        <AddFriendButton />
      </Header>
      <Body />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 999999 250px;
  max-width: 250px;
  height: 100%;
  padding: 20px 20px 0 20px;
  border-left: 1px solid white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 1 999999 40px;
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  flex: 999999 1 auto;
  border: 1px solid white;
`;

const Title = styled.span``;
const AddFriendButton = styled.button`
  width: 32px;
  height: 32px;
`;

export default FriendList;
