/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { Slider as VolumeSlider } from '@ahaui/react';

function AdditionActions({ volume, prevVolume, setVolume }) {
  const toggleMuting = () => setVolume(volume === 0 ? prevVolume : 0);

  return (
    <Wrapper>
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
  justify-content: center;
  align-items: center;
`;

const Volume = styled.div`
  height: 24px;
  width: 120px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const VolumeButton = styled.div`
  height: 24px;
  cursor: pointer;

  & svg {
    font-size: 24px;
  }
`;

// const VolumeSlider = styled.input`
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

export default AdditionActions;
