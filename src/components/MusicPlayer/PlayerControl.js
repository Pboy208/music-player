/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const songSrc =
  'https://res.cloudinary.com/mp320212/video/upload/v1649779823/Music/6fb6c197-6413-7508-38c7-21b180c0988f.mp3';

function PlayerControl() {
  const playerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlaying = () => setIsPlaying((prev) => !prev);

  useEffect(() => {
    if (isPlaying) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      const { duration, currentTime } = playerRef.current;
      setProgress(() => (currentTime / duration) * 100);
    }, 100);
    return () => clearInterval(interval);
  }, [playerRef]);

  const handleProgressChange = (e) => {
    setProgress(() => e.target.value);
    playerRef.current.currentTime =
      (e.target.value / 100) * playerRef.current.duration;
  };

  return (
    <Wrapper>
      <audio src={songSrc} ref={playerRef} />
      <button onClick={togglePlaying}> play/stop</button>
      <ProgressBar
        type="range"
        value={progress}
        step="1"
        min="0"
        max="100"
        onChange={handleProgressChange}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex: 1 999999 min(540px, 38vw);
  min-width: min(540px, 38vw);
  border-left: 1px solid white;
  border-right: 1px solid white;
`;

const ProgressBar = styled.input`
  width: 90%;
  /* -webkit-appearance: none;
  height: 6px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 6px;
    background-color: grey;
    cursor: pointer;
  }
`;

export default PlayerControl;
