import React, { useState } from 'react';
import { Avatar, BubbleChat, Form, Button, Icon } from '@ahaui/react';

export default function Comments() {
  return (
    <div>
      <div className="u-flex u-alignItemsCenter u-marginBottomLarge">
        <Avatar
          size="large"
          className="u-backgroundPrimaryLighter u-textPrimary u-text100"
          text="KT"
        />
        <Form.Group
          style={{
            width: '90%',
            marginBottom: 0,
            marginLeft: 8,
            marginRight: 8,
          }}
        >
          <Form.Input as="textarea" rows={1} placeHolder="Comment here!" />
        </Form.Group>
        <Button variant="primary_outline" size="small" onlyIcon>
          <Button.Icon>
            <Icon size="medium" name="send" />
          </Button.Icon>
        </Button>
      </div>
      <BubbleChat
        text="Hi there! dsklfsdjlflkj\sflkdsjfklds jflkdsjklfjsdklf jlsdlfk jk"
        type="outbound"
        // eslint-disable-next-line react/no-unstable-nested-components
        avatar={() => (
          <Avatar
            size="large"
            className="u-backgroundPrimaryLighter u-textPrimary u-text100"
            text="KT"
          />
        )}
        time="16:24"
      />
      <BubbleChat
        text="Hi there! fghjdsgfhjdsfjlkdsa ljfsjlkdfjldsjfsdjklfdslkj fd fd f ff kljsdfjkldsfjklsdl jkfdsklfsdjlflkj sdfjkfdsjklflkj sdfkjldslkfjdslkjf jkljdsflkdsjfklds jflkdsjklfjsdklf jlsdlfk jk"
        type="outbound"
        // eslint-disable-next-line react/no-unstable-nested-components
        avatar={() => (
          <Avatar
            size="large"
            className="u-backgroundPrimaryLighter u-textPrimary u-text100"
            text="KT"
          />
        )}
        time="16:24"
      />
      <BubbleChat
        text="Hi there! fghjdsgfhjdsfjlkdsa ljfsjlkdfjldsjfsdjklfdslkj fd fd f ff kljsdfjkldsfjklsdl jkfdsklfsdjlflkj sdfjkfdsjklflkj sdfkjldslkfjdslkjf jkljdsflkdsjfklds jflkdsjklfjsdklf jlsdlfk jk"
        type="outbound"
        // eslint-disable-next-line react/no-unstable-nested-components
        avatar={() => (
          <Avatar
            size="large"
            className="u-backgroundPrimaryLighter u-textPrimary u-text100"
            text="KT"
          />
        )}
        time="16:24"
      />
      <BubbleChat
        text="Hi there! fghjdsgfhjdsfjlkdsa ljfsjlkdfjldsjfsdjklfdslkj fd fd f ff kljsdfjkldsfjklsdl jkfdsklfsdjlflkj sdfjkfdsjklflkj sdfkjldslkfjdslkjf jkljdsflkdsjfklds jflkdsjklfjsdklf jlsdlfk jk"
        type="outbound"
        // eslint-disable-next-line react/no-unstable-nested-components
        avatar={() => (
          <Avatar
            size="large"
            className="u-backgroundPrimaryLighter u-textPrimary u-text100"
            text="KT"
          />
        )}
        time="16:24"
      />
      <BubbleChat
        text="Hi there! fghjdsgfhjdsfjlkdsa ljfsjlkdfjldsjfsdjklfdslkj fd fd f ff kljsdfjkldsfjklsdl jkfdsklfsdjlflkj sdfjkfdsjklflkj sdfkjldslkfjdslkjf jkljdsflkdsjfklds jflkdsjklfjsdklf jlsdlfk jk Hi there! fghjdsgfhjdsfjlkdsa ljfsjlkdfjldsjfsdjklfdslkj fd fd f ff kljsdfjkldsfjklsdl jkfdsklfsdjlflkj sdfjkfdsjklflkj sdfkjldslkfjdslkjf jkljdsflkdsjfklds jflkdsjklfjsdklf jlsdlfk jk Hi there! fghjdsgfhjdsfjlkdsa ljfsjlkdfjldsjfsdjklfdslkj fd fd f ff kljsdfjkldsfjklsdl jkfdsklfsdjlflkj sdfjkfdsjklflkj sdfkjldslkfjdslkjf jkljdsflkdsjfklds jflkdsjklfjsdklf jlsdlfk jk"
        type="outbound"
        // eslint-disable-next-line react/no-unstable-nested-components
        avatar={() => (
          <Avatar
            size="large"
            className="u-backgroundPrimaryLighter u-textPrimary u-text100"
            text="KT"
          />
        )}
        time="16:24"
      />
    </div>
  );
}
