import Modal from 'components/common/Modal';
import { useSelector } from 'react-redux';
import PlayingQueue from './PlayingQueue';

function PlayingQueueModal({ close }) {
  const songState = useSelector((state) => state.song);
  console.log(songState);
  if (!songState) return null;

  return (
    <Modal
      close={close}
      width="var(--modal-playing-queue-width)"
      height="var(--modal-playing-queue-height)"
      gap="0px"
    >
      <div
        style={{
          margin: '4px 10px 0px 12px',
        }}
      >
        <p>Playing Queue</p>
      </div>
      <PlayingQueue songList={songState.playingQueue} />
    </Modal>
  );
}

export default PlayingQueueModal;
