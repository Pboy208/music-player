/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  FaPlayCircle,
  FaPauseCircle,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaUndoAlt,
} from 'react-icons/fa';

function PlayerControl({ song, moveNext, movePrev }) {
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
      if (currentTime / duration === 1) return moveNext();
      setProgress(() => (currentTime / duration) * 100);
    }, 100);
    return () => clearInterval(interval);
  }, [moveNext, playerRef, song]);

  const handleProgressChange = (e) => {
    setProgress(() => e.target.value);
    playerRef.current.currentTime =
      (e.target.value / 100) * playerRef.current.duration;
  };

  return (
    <Wrapper>
      <audio src={song.urlMusic} ref={playerRef} />
      <ActionsWrapper>
        <PlayerAction size="small">
          <FaRandom />
        </PlayerAction>
        <PlayerAction size="small" onClick={movePrev}>
          <FaStepBackward />
        </PlayerAction>
        <PlayerAction size="large" onClick={togglePlaying}>
          {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
        </PlayerAction>
        <PlayerAction size="small" onClick={moveNext}>
          <FaStepForward />
        </PlayerAction>
        <PlayerAction size="small">
          <FaUndoAlt />
        </PlayerAction>
      </ActionsWrapper>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: baseline;
`;

const PlayerAction = styled.div`
  height: 36px;
  width: 36px;
  cursor: pointer;
  & svg {
    font-size: ${(props) => (props.size === 'small' ? '24px' : '36px')};
  }
`;

const ProgressBar = styled.input`
  width: 80%;
  height: 6px;
  -webkit-appearance: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  cursor: pointer;

  &::-webkit-slider-thumb {
    width: 12px;
    height: 6px;
    -webkit-appearance: none;
    background-color: grey;
    appearance: none;
    cursor: pointer;
  }
`;

export default PlayerControl;
