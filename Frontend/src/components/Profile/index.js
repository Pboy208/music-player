/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Avatar, Separator, Button, Icon } from '@ahaui/react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from 'api/profileAPIs';
import * as Toast from 'components/common/Toast';
import { logout } from 'store/authSlice';
import Post from './Post';
// eslint-disable-next-line import/no-named-as-default
import SongAdding from './SongAdding';
import ProfileEditing from './ProfileEditing';

function Profile({ userId }) {
  const { user } = useSelector((state) => state.auth);
  const { userId: targetUserId } = useParams();
  const [postList, setPostList] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [targetUser, setTargetUser] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchProfile = () => {
      getProfile(targetUserId)
        .then(({ data }) => {
          setTargetUser(data.profile);
          setPostList(data.postList);
        })
        .catch((error) => {
          if (error.message === 'AUTHORIZATION_FAILED') {
            dispatch(logout());
            Toast.error("Your session is over. Please login again.");
          }
        });
    };
    fetchProfile();
    // setPostList(response.postList);
  }, [targetUserId]);

  const addPost = (newPost) => {
    setPostList([newPost, ...postList]);
  };

  if (!targetUser || !postList) return null;

  return (
    <div
      className="u-flex u-flexColumn card"
      style={{
        gap: 24,
        backgroundColor: 'white',
      }}
    >
      <div className="u-flex u-positionRelative u-marginLeftLarge">
        <div className="u-marginRightLarge">
          <Avatar
            src={targetUser.avatar}
            size="huge"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="u-flexGrow1">
          <div className="u-marginBottomExtraSmall">
            <strong className="u-text1000">{targetUser.name}</strong>
          </div>
          <div>{targetUser.bio}</div>
        </div>
        {user.userID === targetUserId && (
          <div
            className="u-positionAbsolute u-positionTop u-positionRight u-cursorPointer"
            onClick={() => setIsEditingProfile(true)}
          >
            <Icon size="small" name="edit" />
          </div>
        )}
      </div>
      <Separator />
      {!isPosting && user.userID === targetUserId && (
        <>
          <Button onClick={() => setIsPosting(true)}>
            <Button.Icon>
              <Icon size="medium" name="cloudUpload" />
            </Button.Icon>
            <Button.Label>Upload song</Button.Label>
          </Button>
          <Separator />
        </>
      )}
      {isPosting && (
        <SongAdding close={() => setIsPosting(false)} addNewPost={addPost} />
      )}
      {isEditingProfile && (
        <ProfileEditing
          close={() => setIsEditingProfile(false)}
          user={targetUser}
          setProfile={(profile) => setTargetUser(profile)}
        />
      )}
      <div className="u-flex u-flexColumn u-alignItemsCenter">
        {postList.map((post) => (
          <Post
            key={post.postId}
            post={post}
            userId={user.userId}
            targetUser={targetUser}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;
