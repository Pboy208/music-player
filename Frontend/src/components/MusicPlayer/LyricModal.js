/* eslint-disable no-new */
import Modal from 'components/common/Modal';
import { useLayoutEffect, useState } from 'react';
import { getSongLyric } from 'api/songAPIs';

const lyricDefault =
  "Nicki Minaj, Maroon 5, Let's go \n Yo, I got them Now & Laters, and them Jolly Ranchers too\nIt ain't a question, but I got the answers too\nThese shoes is Cavalli, and the pants is too\nWhen I see him I'mma strip like the dancers do\nImma show them how to do it like the pamphlets do\nShow these girls how to do it off campus too\nYo, as long as you know he got the baddest, I'm flattered\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya\nI'm the only one that he answers to\nAnd if you need it (need it) then I'mma put it on ya";

function LyricModal({ songId, close, name  }) {
  const [lyric, setLyric] = useState('');

  useLayoutEffect(() => {
    getSongLyric(songId).then(({ data }) => {
      console.log(data);
      setLyric(data.lyrics);
    });
  }, [songId]);

  return (
    <Modal
      close={close}
      width="var(--modal-lyric-width)"
      height="var(--modal-lyric-height)"
      gap="0px"
    >
      <div
        style={{
          margin: '16px 10px 0px 12px',
        }}
      >
        <p>{name}</p>
      </div>
      <div
        style={{
          margin: '0 10px 24px 12px',
          padding: '0px 8px',
          overflow: 'auto',
          border: '1px solid #dfe1e6',
          borderRadius: '8px',
          width: '95%',
        }}
      > 
        {!lyric && <div> Sorry, it seems like this song lyric is not available</div>}
        {lyric && (
          <p style={{ whiteSpace: 'pre-line', lineHeight: 3 }}>
            {lyric}
          </p>
        )}
      </div>
    </Modal>
  );
}

export default LyricModal;
