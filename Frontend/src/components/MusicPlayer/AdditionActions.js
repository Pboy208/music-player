/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { Slider as VolumeSlider } from '@ahaui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function AdditionActions({ volume, prevVolume, setVolume, liked }) {
  const toggleMuting = () => setVolume(volume === 0 ? prevVolume : 0);

  return (
    <Wrapper>
      <div
        style={{
          height: 28,
          cursor: 'pointer',
        }}
      >
        {liked ? (
          <FaHeart style={{ fontSize: 28, color: 'red' }} />
        ) : (
          <FaRegHeart style={{ fontSize: 28 }} />
        )}
      </div>
      <Volume>
        <VolumeButton onClick={toggleMuting}>
          {volume == 0 ? <FiVolumeX /> : <FiVolume2 />}
        </VolumeButton>
        <VolumeSlider
          min={0}
          max={100}
          value={volume}
          onChange={(value) => setVolume(value)}
          style={{
            height: 16,
            width: 120,
            margin: 0,
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
      </Volume>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 10 1;
  border-left: 1px solid white;
  display: flex;
  padding-right: 2px;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

const Volume = styled.div`
  height: 24px;
  width: 120px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const VolumeButton = styled.div`
  height: 24px;
  cursor: pointer;

  & svg {
    font-size: 24px;
  }
`;

export default AdditionActions;
