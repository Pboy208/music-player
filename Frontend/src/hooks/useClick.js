import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { playSongNow, addToQueue } from 'store/songSlice';

function useClick({ song, callback, disabled }) {
  const [click, setClick] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      // simple click
      if (click === 1) {
        if (callback) {
          callback(true);
        } else if (disabled) {
          dispatch(playSongNow(song));
        } else dispatch(addToQueue(song));
      }
      setClick(0);
    }, 250);

    // the duration between this click and the previous one
    // is less than the value of delay = double-click
    if (click === 2) {
      if (callback) {
        callback(false);
      } else {
        dispatch(playSongNow(song));
      }
    }

    return () => clearTimeout(timer);
  }, [click]);

  return () => setClick((prev) => prev + 1);
}

export default useClick;
