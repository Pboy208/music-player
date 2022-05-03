import styled from 'styled-components';
import SongList from 'components/Song/SongList';

function Personal() {
  return (
    <Wrapper className="card aligned-center">
      <Navigator>
        <CustomLink> Liked</CustomLink>
        <CustomLink> Album</CustomLink>
      </Navigator>
      <SongList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

const Navigator = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
`;

const CustomLink = styled.a`
  height: 40px;
  width: 80px;
`;

export default Personal;
