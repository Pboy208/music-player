import styled from 'styled-components';
import { timeFormatter } from 'utils/formatter';
import SongInfo from 'components/MusicPlayer/SongInfo';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { playSongNow } from 'store/songSlice';

function SongItemExplore({ song }) {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);

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
        cursor: 'pointer'
      }}
      onClick={() => dispatch(playSongNow(song))}
    >
      <td>
        <SongInfo song={song} size="large" />
      </td>
      <td>{timeFormatter(duration)}</td>
    </tr>
  );
}

const Rank = styled.div`
  font-size: 28px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const First = styled.span`
  color: red;
  font-size: 42px;
`;

const Second = styled.span`
  color: blue;
  font-size: 35px;
`;

const Third = styled.span`
  color: green;
`;

export default SongItemExplore;
