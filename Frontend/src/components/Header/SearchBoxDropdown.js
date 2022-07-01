import { Avatar } from '@ahaui/react';

function DropdownItem({ avatar, name, type }) {
  return (
    <div
      className="u-flex u-alignItemsCenter u-borderBottom u-backgroundGray u-shadowMedium"
      style={{
        top: '100%',
        left: 0,
        gap: 12,
        paddingLeft: 12,
      }}
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
        <span className="u-text100">{type}</span>
      </div>
    </div>
  );
}

const defaultResults = [
  { avatar: '', name: 'name', type: 'Artist' },
  { avatar: '', name: 'name', type: 'Artist' },
  { avatar: '', name: 'name', type: 'Artist' },
];

function SearchBoxDropdown(results) {
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
      {defaultResults.map((result) => (
        <DropdownItem
          key={result.avatar + result.name}
          avatar={result.avatar}
          name={result.name}
          type={result.type}
        />
      ))}
    </div>
  );
}

export default SearchBoxDropdown;
