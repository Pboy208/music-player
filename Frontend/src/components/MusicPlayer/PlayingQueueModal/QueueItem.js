/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import { timeFormatter } from 'utils/formatter';
import SongInfo from 'components/MusicPlayer/SongInfo';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { removeFromQueue } from 'store/songSlice';
import useClick from 'hooks/useClick';

function QueueItem({ song }) {
  const click = useClick({ song,disabled:true });
  const [duration, setDuration] = useState(0);
  const dispatch = useDispatch();

  const audio = new Audio(song.urlMusic);
  audio.onloadedmetadata = (e) => {
    if (audio.readyState > 0) {
      setDuration(audio.duration);
    }
  };

  const removeHandler = (e) => {
    e.stopPropagation();
    dispatch(removeFromQueue(song.songId));
  }

  return (
    <tr
      className="u-userSelectNone"
      style={{
        height: 60,
      }}
      onClick={click}
    >
      <td>
        <SongInfo song={song} size="medium" />
      </td>
      <td>{timeFormatter(duration)}</td>
      <td>
        <div onClick={removeHandler}>
          <IoIosRemoveCircleOutline
            style={{
              fontSize: 18,
              cursor: 'pointer',
            }}
          />
        </div>
      </td>
    </tr>
  );
}

export default QueueItem;
