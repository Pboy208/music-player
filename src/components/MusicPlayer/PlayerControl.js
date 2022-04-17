/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const songSrc =
  'https://res.cloudinary.com/mp320212/video/upload/v1649779823/Music/6fb6c197-6413-7508-38c7-21b180c0988f.mp3';

function PlayerControl() {
  const playerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlaying = () => setIsPlaying((prev) => !prev);

  useEffect(() => {
    if (isPlaying) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  }, [isPlaying]);
  
  return (
    <Wrapper>
      <audio src={songSrc} ref={playerRef} />
      <button onClick={togglePlaying}> play/stop</button>
      <SongProgress type="range" value="0" step="1" min="0" max="100" />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex: 1 999999 min(540px, 38vw);
  min-width: min(540px, 38vw);
  border-left: 1px solid white;
  border-right: 1px solid white;
`;

const SongProgress = styled.input``;

export default PlayerControl;
