import styled from 'styled-components';

function PlayerQueue() {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Body />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 999999 230px;
  max-width: 230px;
  border-left: 1px solid white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 1 999999 60px;
  padding: var(--small-space);
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  flex: 999999 1 auto;
  border: 1px solid white;
`;

export default PlayerQueue;
