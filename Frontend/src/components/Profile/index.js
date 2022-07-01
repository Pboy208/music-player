/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Avatar, Separator, Button, Icon } from '@ahaui/react';
import { User, Posts } from './dummyData';
import Post from './Post';
// eslint-disable-next-line import/no-named-as-default
import SongAdding from './SongAdding';
import ProfileEditing from './ProfileEditing';

function Profile({ userId }) {
  const [user, setUser] = useState(User);
  const [posts, setPosts] = useState(Posts);
  const [isPosting, setIsPosting] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const fileChangeHandler = (e) => {
    console.log(e.target.file);
  };

  return (
    <div
      className="u-flex u-flexColumn u-paddingHorizontalExtraLarge u-paddingVerticalLarge u-alignItemsCenter"
      style={{
        gap: 24,
        backgroundColor: 'white',
      }}
    >
      <div className="u-flex u-positionRelative">
        <div className="u-marginRightLarge">
          <Avatar
            src={user.avatar}
            size="huge"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="u-flexGrow1">
          <div className="u-marginBottomExtraSmall">
            <strong className="u-text1000">{user.name}</strong>
          </div>
          <div>
            Now you can freely change the values inside E3 and G3 and the
            Conditional Formatting rule will be automatically applied. Another
            way of doing this is to rename the limit cells E3 and G3. On the
            Formula Bar.
          </div>
        </div>
        <div
          className="u-positionAbsolute u-positionTop u-positionRight u-cursorPointer"
          onClick={() => setIsEditingProfile(true)}
        >
          <Icon size="small" name="edit" />
        </div>
      </div>
      <Separator />
      {!isPosting && (
        <Button onClick={() => setIsPosting(true)}>
          <Button.Icon>
            <Icon size="medium" name="cloudUpload" />
          </Button.Icon>
          <Button.Label>Upload song</Button.Label>
        </Button>
      )}
      {isPosting && <SongAdding close={() => setIsPosting(false)} />}
      {isEditingProfile && (
        <ProfileEditing close={() => setIsEditingProfile(false)} />
      )}
      <Separator />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Profile;
