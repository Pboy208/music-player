import styled from 'styled-components';
import SongCardList from 'components/Song/SongCardList';
import ArtistCardList from 'components/Artist/ArtistCardList';
import { Link } from 'react-router-dom';

function Explore() {
    return (
    <Wrapper className="card aligned-center">
      <h1>Explorer</h1>
      <NewSong>
        <div style={{display: "inline-flex"}}>
          <h3>New release</h3>
          <Link style={{ marginLeft: "20px",padding: "5px",fontSize: "16px", fontWeight: "600"}} to="/explore/song">More</Link>
        </div>
        <SongCardList/>
      </NewSong>
      <Artist>
        <h3>New artist feature</h3>
        <ArtistCardList/>
      </Artist>
      {/* <NewAlbum>
        <h3>New album arrived</h3>
        <AlbumCardList />
      </NewAlbum> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  h1 {
    font-weight: 800;
    margin-bottom: 0;
  }
`;
const NewSong = styled.div`
  display: flex;
  flex-direction: column;
`;
const NewAlbum = styled.div`
  display: flex;
  flex-direction: column;
`;
const Artist = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Explore;
