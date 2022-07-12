import { useState, useEffect, useRef, useCallback } from 'react';
import { search } from 'api/songAPIs';
import { useDispatch } from 'react-redux';
import { logout } from 'store/authSlice';

const useSearch = (query) => {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [nextOffset, setNextOffset] = useState(0);
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setHasMore(true);
    setOffset(0);
    setNextOffset(0);
    setResult([]);
  }, [query]);

  useEffect(() => {
    const searchWithOffset = async () => {
      setNextOffset((prev) => prev + 1);
      try {
        const { data } = await search(query, offset);
        if (!data) return;
        // eslint-disable-next-line no-unused-expressions
        data.length === 0
          ? setHasMore(false)
          : setResult((prev) => [...prev, ...data]);
      } catch (error) {
        if (error.message === 'AUTHORIZATION_FAILED') {
          dispatch(logout());
        }
      }
    };

    const searchValueDebounce = setTimeout(() => {
      if (hasMore && offset === nextOffset && !!query) searchWithOffset();
    }, 500);

    return () => {
      clearTimeout(searchValueDebounce);
    };
  }, [offset, nextOffset, hasMore, query]);

  const observer = useRef();

  const lastItemRef = useCallback(
    (lastTaskElement) => {
      observer.current?.disconnect();
      observer.current = new IntersectionObserver(
        (entries) =>
          entries[0].isIntersecting && hasMore && setOffset((prev) => prev + 1),
      );
      if (lastTaskElement) {
        observer.current.observe(lastTaskElement);
      }
    },
    [hasMore],
  );

  return { result, lastItemRef };
};

export default useSearch;
