import * as React from 'react';
import { Dropdown } from '@ahaui/react';

function CustomizedDropdown({ icon, childrenList = [] }) {
  return (
    <Dropdown alignRight>
      <Dropdown.Toggle className="u-textLight u-lineHeightNone">
        <div>{icon}</div>
      </Dropdown.Toggle>
      <Dropdown.Container className="u-paddingVerticalExtraSmall">
        {childrenList.map((child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Dropdown.Item key={index} onClick={child.handler} className="u-flex" style={{gap:8, paddingLeft:24, paddingBottom:8}}>
            {child.ui}
          </Dropdown.Item>
        ))}
      </Dropdown.Container>
    </Dropdown>
  );
}

export default CustomizedDropdown;
