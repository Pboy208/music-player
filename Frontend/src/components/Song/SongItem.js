/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import styled from 'styled-components';
import { timeFormatter } from 'utils/formatter';
import SongInfo from 'components/MusicPlayer/SongInfo';
import { useDispatch } from 'react-redux';
import { playSongNow } from 'store/songSlice';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const songDefault = {
  songId: '3aa5f4ee-7b51-1bc6-e032-03c92da59c43',
  name: 'Mây Hồng Đưa Lối',
  author: 'Phuonw',
  authorId: '27341263-7cbf-193d-781d-bb3758d4bac0',
  urlImage:
    'https://res.cloudinary.com/mp320212/image/upload/Image/66f5692b-4709-2091-4dc1-f32a102323e6',
  urlMusic:
    'https://res.cloudinary.com/mp320212/video/upload/Music/19305c7c-15bd-1841-df99-4d3edfe18939',
  liked: true,
};

function SongItem({ song = songDefault }) {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(song.liked);

  const audio = new Audio(song.urlMusic);
  audio.onloadedmetadata = (e) => {
    if (audio.readyState > 0) {
      setDuration(audio.duration);
    }
  };

  const unLikeHandler = (e) => {
    e.stopPropagation();
    setIsLiked(false);
  };

  if (!isLiked) return null;

  return (
    <tr
      className="u-userSelectNone"
      style={{
        height: 60,
      }}
      onClick={() => dispatch(playSongNow(song))}
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
