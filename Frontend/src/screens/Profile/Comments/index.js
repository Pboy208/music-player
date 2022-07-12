/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Avatar, BubbleChat, Form, Button, Icon } from '@ahaui/react';
import { addComment } from 'api/postAPIs';
import { timeSince } from 'utils/datetime';

export default function Comments({ postId, commentList, commentHandler,user }) {
  const [comment, setComment] = useState();

  const handleSubmit = (e) => {
    addComment(comment, postId).then((res) => console.log(res));
    commentHandler(comment);
    setComment('');
  };

  return (
    <div>
      <div className="u-flex u-alignItemsCenter u-marginBottomLarge">
        <Avatar
          size="large"
          className="u-backgroundPrimaryLighter u-textPrimary u-text100"
          text="KT"
          src={user.avatar}
        />
        <Form.Group
          style={{
            marginBottom: 0,
            marginLeft: 8,
            marginRight: 8,
            flex: '1 1',
          }}
        >
          <Form.Input
            as="textarea"
            rows={1}
            placeholder="Comment here!"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary_outline"
          size="small"
          onlyIcon
          onClick={handleSubmit}
        >
          <Button.Icon>
            <Icon size="medium" name="send" />
          </Button.Icon>
        </Button>
      </div>
      {commentList.map((comment) => (
        <BubbleChat
          key={comment.commentId}
          text={comment.content}
          type="outbound"
          // eslint-disable-next-line react/no-unstable-nested-components
          avatar={() => (
            <Avatar
              size="large"
              className="u-backgroundPrimaryLighter u-textPrimary u-text100"
              text="KT"
              src={comment.avatar}
            />
          )}
          time={`${timeSince(comment.createdAt)} - by ${comment.author}`}
        />
      ))}
    </div>
  );
}
