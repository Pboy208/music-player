/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { Slider as VolumeSlider } from '@ahaui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdOutlineSpeakerNotes } from 'react-icons/md';
import { RiPlayList2Line } from 'react-icons/ri';
import { useLayoutEffect, useState } from 'react';
import { toggleLike } from 'store/songSlice';
import { useDispatch } from 'react-redux';
import LyricModal from './LyricModal';
import PlayingQueueModal from './PlayingQueueModal';

function AdditionActions({ volume, prevVolume, setVolume, song }) {
  const toggleMuting = () => setVolume(volume === 0 ? prevVolume : 0);
  const [isLiked, setIsLiked] = useState(song?.liked);
  const [isOpenLyric, setIsOpenLyric] = useState(false);
  const [isOpenPlayingQueue,setIsOpenPlayingQueue] = useState(false);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setIsLiked(song?.liked);
  }, [song]);

  const toggleLikeHandler = () => {
    if (!song) return;
    setIsLiked((prev) => !prev);
    dispatch(toggleLike(song.songId));
  };

  return (
    <>
      {isOpenLyric && <LyricModal songId={song.songId} close={() => setIsOpenLyric(false)} />}
      {isOpenPlayingQueue && <PlayingQueueModal close={() => setIsOpenPlayingQueue(false)} />}
      <Wrapper>
        <div
          style={{
            height: 28,
            cursor: 'pointer',
          }}
          onClick={toggleLikeHandler}
        >
          {isLiked ? (
            <FaHeart style={{ fontSize: 28, color: 'red' }} />
          ) : (
            <FaRegHeart style={{ fontSize: 28 }} />
          )}
        </div>
        <Volume className="volume-wrapper">
          <VolumeButton onClick={toggleMuting}>
            {volume == 0 ? <FiVolumeX /> : <FiVolume2 />}
          </VolumeButton>
          <div
            className="volume-slider"
            style={{
              width: 28,
              height: 28,
              justifyContent: 'center',
            }}
          >
            <VolumeSlider
              vertical
              min={0}
              max={100}
              value={volume}
              onChange={(value) => setVolume(value)}
              style={{
                height: 120,
                width: 8,
                margin: 0,
                cursor: 'pointer',
              }}
              handleStyle={{
                display: 'none',
              }}
              trackStyle={
                {
                  // height: 6,
                }
              }
              railStyle={
                {
                  // height: 6,
                }
              }
            />
          </div>
        </Volume>
        <div
          style={{
            height: 28,
            width: 28,
          }}
          onClick={() => setIsOpenLyric((prev) => !prev)}
        >
          <MdOutlineSpeakerNotes
            style={{
              fontSize: 28,
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          style={{
            height: 28,
            width: 28,
          }}
          onClick={() => setIsOpenPlayingQueue((prev) => !prev)}
        >
          <RiPlayList2Line
            style={{
              fontSize: 28,
              cursor: 'pointer',
            }}
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  flex: 10 1;
  border-left: 1px solid white;
  display: flex;
  padding-right: 2px;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Volume = styled.div`
  height: 28px;
  width: 28;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const VolumeButton = styled.div`
  height: 28px;
  cursor: pointer;

  & svg {
    font-size: 28px;
  }
`;

export default AdditionActions;
