/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import styled from 'styled-components';
import { timeFormatter } from 'utils/formatter';
import SongInfo from 'components/MusicPlayer/SongInfo';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { toggleLike } from 'store/songSlice';
import useClick from 'hooks/useClick';

function SongItem({ song }) {
  const dispatch = useDispatch();
  const click = useClick({ song });
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(true);

  const audio = new Audio(song.urlMusic);
  audio.onloadedmetadata = (e) => {
    if (audio.readyState > 0) {
      setDuration(audio.duration);
    }
  };

  const unLikeHandler = (e) => {
    e.stopPropagation();
    setIsLiked(false);
    dispatch(toggleLike(song.songId));
  };

  if (!isLiked) return null;

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
      <td>{song.name}</td>
      <td>{timeFormatter(duration)}</td>
      <td>
        <div onClick={unLikeHandler}>
          <FaHeart
            style={{
              fontSize: 18,
              color: 'red',
              cursor: 'pointer',
            }}
          />
        </div>
      </td>
    </tr>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid white;
  display: flex;
  align-items: center;

  &:hover {
    background-color: gray;
  }
`;

const Info = styled.p`
  flex: ${(props) => props.flex};
`;

export default SongItem;
