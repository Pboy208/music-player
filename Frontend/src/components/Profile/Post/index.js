import React, { useState } from 'react';
import { Avatar, Separator, Icon, Button } from '@ahaui/react';
import Comments from '../Comments';
import { User } from '../dummyData';

export default function Post({ post, userId}) {
  const [user, setUser] = React.useState(User);
  const [isCommenting, setIsCommenting] = useState(false);
  return (
    <div
      className="u-flex u-flexColumn u-paddingHorizontalLarge u-paddingTopLarge u-paddingBottomSmall u-marginBottomMedium u-border u-roundedLarge"
      style={{
        gap: 12,
        width: '80%',
      }}
    >
      <div className="u-flex">
        <div className="u-marginRightSmall">
          <Avatar
            src={user.avatar}
            size="large"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="u-flexGrow1">
          <strong className="u-text400">{user.name}</strong>
          <div className="u-textPrimary">4 hours ago</div>
        </div>
      </div>
      <div>body</div>
      <Separator />
      <div className="u-flex u-justifyContentBetween u-alignItemsCenter">
        <div>46 Likes</div>
        <div
          className="u-flex"
          style={{
            gap: 12,
          }}
        >
          <Button variant="primary_outline" size="small" onlyIcon>
            <Button.Icon>
              <Icon size="medium" name="thumbsUp" />
            </Button.Icon>
          </Button>
          <Button
            variant="primary_outline"
            size="small"
            onlyIcon
            onClick={() => setIsCommenting((prev) => !prev)}
          >
            <Button.Icon>
              <Icon size="medium" name="chatBubbles" />
            </Button.Icon>
          </Button>
        </div>
      </div>
      {isCommenting && (
        <>
          <Separator />
          <Comments />
        </>
      )}
    </div>
  );
}
