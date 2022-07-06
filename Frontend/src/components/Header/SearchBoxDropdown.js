/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Avatar } from '@ahaui/react';
import { getSongById } from 'api/songAPIs';
import { playSongNow } from 'store/songSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function DropdownItem({ avatar, name, type, id, lastItemRef, resetSearch }) {
  const isArtistItem = !!type;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = async () => {
    resetSearch();
    if (isArtistItem) {
      navigate(`/personal/${id}`);
    } else {
      const { data } = await getSongById(id);
      dispatch(playSongNow(data));
    }
  };

  return (
    <div
      className="u-flex u-alignItemsCenter u-borderBottom u-backgroundGray u-shadowMedium"
      style={{
        top: '100%',
        left: 0,
        gap: 12,
        paddingLeft: 12,
      }}
      ref={lastItemRef || null}
      onClick={onClickHandler}
    >
      <div>
        <Avatar
          className="u-backgroundPrimaryLight u-text200"
          text="TT"
          src={avatar}
        />
      </div>
      <div className="u-flex u-flexColumn">
        <span className="u-text400">{name}</span>
        <span className="u-text100">{isArtistItem ? 'Artist' : 'Song'}</span>
      </div>
    </div>
  );
}

function SearchBoxDropdown({ lastItemRef, result, resetSearch }) {
  if (result.length === 0) return null;
  console.log(result);
  return (
    <div
      className="u-flex u-flexColumn u-positionAbsolute u-border"
      style={{
        width: '40%',
        maxHeight: '30vh',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        overflow: 'auto',
      }}
    >
      {result.map((item, index) => {
        const isLastItem = index === result.length - 1;
        return (
          <DropdownItem
            lastItemRef={isLastItem ? lastItemRef : null}
            key={item.id}
            id={item.id}
            avatar={item.image}
            name={item.name}
            type={item.type}
            resetSearch={resetSearch}
          />
        );
      })}
    </div>
  );
}

export default SearchBoxDropdown;
