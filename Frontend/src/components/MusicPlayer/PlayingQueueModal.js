import Modal from 'components/common/Modal';

const lyricDefault =
  "Nicki Minaj, Maroon 5, Let's go \n Yo, I got them Now & Laters, and them Jolly Ranchers too\nIt ain't a question, but I got the answers too\nThese shoes is Cavalli, and the pants is too\nWhen I see him I'mma strip like the dancers do\nImma show them how to do it like the pamphlets do\nShow these girls how to do it off campus too\nYo, as long as you know he got the baddest, I'm flattered\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya";

function PlayingQueueModal({ postId, close }) {
  return (
    <Modal
      close={close}
      width="var(--modal-lyric-width)"
      height="var(--modal-lyric-height)"
    >
      <div
        style={{
          margin: '40px 10px 24px 12px',
          padding: '0px 8px',
          overflow: 'auto',
          border: '1px solid #dfe1e6',
          borderRadius: '8px',
        }}
      >
        <p style={{ whiteSpace: 'pre-line', lineHeight: 3 }}>{lyricDefault}</p>
      </div>
    </Modal>
  );
}

export default PlayingQueueModal;
