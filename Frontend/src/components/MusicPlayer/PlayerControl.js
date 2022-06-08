/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useReducer, useRef } from 'react';
import styled from 'styled-components';
import {
  FaPlayCircle,
  FaPauseCircle,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaUndoAlt,
} from 'react-icons/fa';
import { timeFormatter } from 'utils/formatter';
import { Slider as ProgressBar } from '@ahaui/react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAYING':
      return { ...state, isPlaying: action.isPlaying };
    case 'SET_PROGRESS':
      return {
        ...state,
        progress: action.progress,
        currentTime: Math.round(action.currentTime),
      };
    default:
      return state;
  }
};

const PlayerControl = React.memo(
  ({
    song,
    moveNext,
    movePrev,
    volume,
    toggleShuffle,
    togglePlayback,
    isShuffle,
    isPlayback,
  }) => {
    const playerRef = useRef();

    const [state, setState] = useReducer(reducer, {
      isPlaying: false,
      progress: 0,
      currentTime: 0,
    });
    const { isPlaying, progress, currentTime } = state;

    const togglePlaying = () =>
      setState({ type: 'SET_PLAYING', isPlaying: !isPlaying });

    useEffect(() => {
      if (isPlaying) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }, [isPlaying, song]);

    useEffect(() => {
      playerRef.current.volume = volume / 100;
    }, [volume]);

    useEffect(() => {
      if (!isPlaying) return;

      const interval = setInterval(() => {
        const { duration, currentTime: songCurrentTime } = playerRef.current;
        // khi het nhac thi move tiep
        if (songCurrentTime / duration === 1) {
          if (isPlayback) {
            playerRef.current.currentTime = 0;
            playerRef.current.play();
            return;
          }
          return moveNext();
        }

        setState({
          type: 'SET_PROGRESS',
          progress: (songCurrentTime / duration) * 100,
          currentTime: songCurrentTime,
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [isPlaying, isPlayback, moveNext, playerRef]);

    const handleProgressChange = (value) => {
      setState({
        type: 'SET_PROGRESS',
        progress: value,
      });
      playerRef.current.currentTime =
        (value / 100) * playerRef.current.duration;
    };

    return (
      <Wrapper>
        <audio src={song.urlMusic} ref={playerRef} />
        <ActionsWrapper>
          <PlayerAction size="small" onClick={toggleShuffle}>
            <FaRandom
              style={{
                color: isShuffle ? 'var(--color-primary)' : 'var(--text-color)',
              }}
            />
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
          <PlayerAction size="small" onClick={togglePlayback}>
            <FaUndoAlt
              style={{
                color: isPlayback
                  ? 'var(--color-primary)'
                  : 'var(--text-color)',
              }}
            />
          </PlayerAction>
        </ActionsWrapper>
        <ProgressBarWrapper>
          <Time className="u-userSelectNone">{timeFormatter(currentTime)}</Time>
          <ProgressBar
            min={0}
            max={100}
            value={progress}
            onChange={handleProgressChange}
            variant="primary"
            style={{
              marginBottom: 8,
              cursor: 'pointer',
            }}
            handleStyle={{
              display: 'none',
            }}
            trackStyle={{
              height: 6,
            }}
            railStyle={{
              height: 6,
            }}
          />
          <Time className="u-userSelectNone">
            {timeFormatter(song.timePlays / 1000)}
          </Time>
        </ProgressBarWrapper>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  flex: 1 999999;
  min-width: min(540px, 38vw);
  border-left: 1px solid white;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: baseline;
`;

const PlayerAction = styled.div`
  height: ${(props) => (props.size === 'small' ? '16px' : '24px')};
  width: ${(props) => (props.size === 'small' ? '16px' : '24px')};
  cursor: pointer;
  & svg {
    font-size: ${(props) => (props.size === 'small' ? '16px' : '24px')};
  }
`;

const Time = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

// const ProgressBar = styled.input`
//   width: 80%;
//   height: 6px;
//   -webkit-appearance: none;
//   -webkit-transition: 0.2s;
//   transition: opacity 0.2s;
//   background: #d3d3d3;
//   outline: none;
//   opacity: 0.7;
//   cursor: pointer;

//   &::-webkit-slider-thumb {
//     width: 12px;
//     height: 6px;
//     -webkit-appearance: none;
//     background-color: grey;
//     appearance: none;
//     cursor: pointer;
//   }
// `;

export default PlayerControl;
