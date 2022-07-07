import styled from 'styled-components';
import { timeFormatter } from 'utils/formatter';
import SongInfo from 'components/MusicPlayer/SongInfo';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { playSongNow,toggleLike } from 'store/songSlice';

// const song = {
//   song_id: '3aa5f4ee-7b51-1bc6-e032-03c92da59c43',
//   name: 'Mây Hồng Đưa Lối',
//   times_play: 181000,
//   album_id: '20d0b9f3-3e65-1639-9d7d-e8c757976496',
//   name_artist: 'Bâu',
//   artist_id: '27341263-7cbf-193d-781d-bb3758d4bac0',
//   urlImage:
//     'https://res.cloudinary.com/mp320212/image/upload/Image/66f5692b-4709-2091-4dc1-f32a102323e6',
//   urlMusic:
//     'https://res.cloudinary.com/mp320212/video/upload/Music/6fb6c197-6413-7508-38c7-21b180c0988f',
//   rank: 1
// };

function SongItemChart({ song }) {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  // const [isLiked, setIsLiked] = useState(true);

  const audio = new Audio(song.urlMusic);
  audio.onloadedmetadata = (e) => {
    if (audio.readyState > 0) {
      setDuration(audio.duration);
    }
  };
  return (
    <tr
      className="u-userSelectNone"
      style={{
        height: 60,
      }}
      onClick={() => dispatch(playSongNow(song))}
    >
      <td>
        <Rank>
          {(() => {
          if (song.rank === 1) {
            return (
              <First>{song.rank}</First>
            )
          } if (song.rank === 2) {
            return (
              <Second>{song.rank}</Second>
            )
          } if (song.rank === 3) {
            return (
              <Third>{song.rank}</Third>
            )
          } 
            return (
              <span>{song.rank}</span>
            )
          })()}
        </Rank>
      </td>
      <td>
        <SongInfo song={song} size="large" />
      </td>
      {/* <td>{song.name}</td> */}
      <td>{timeFormatter(duration)}</td>
    </tr>
  );
}

const Rank = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const First = styled.span`
  color: red;
`;

const Second = styled.span`
  color: blue;
`;

const Third = styled.span`
  color: yellow;
`;

export default SongItemChart;
