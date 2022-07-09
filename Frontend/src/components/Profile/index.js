/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Avatar, Separator, Button, Icon } from '@ahaui/react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProfile } from 'api/profileAPIs';
import { User, Posts } from './dummyData';
import Post from './Post';
// eslint-disable-next-line import/no-named-as-default
import SongAdding from './SongAdding';
import ProfileEditing from './ProfileEditing';

const post = {
  postId: '1234567',
  liked: true,
  content: 'This is the favorite song of Pboy',
  createdAt: new Date(),
  numberOfLike: 10,
  song: {
    urlImage:
      'https://res.cloudinary.com/mp320212/image/upload/Image/1f7b1037-2475-4221-b699-4d3edfe18939',
    urlMusic:
      'https://res.cloudinary.com/mp320212/video/upload/Music/1f7b1037-2475-4221-b699-4d3edfe18939',
    name: 'Too Good At Goodbyes',
    songId: '3c91001d-f1f5-11ec-aa89-0a5de61f8cc6',
    author: 'undefined',
    authorId: '73a8563d-fc89-11ec-aa89-0a5de61f8cc6',
    liked: true,
  },
};

const profile = User;

const response = {
  profile,
  postList: [post, post, post, post, post, post, post, post, post, post],
};

function Profile({ userId }) {
  const { user } = useSelector((state) => state.auth);
  const { userId: targetUserId } = useParams();
  const [postList, setPostList] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [targetUser, setTargetUser] = useState(null);

  useEffect(() => {
    const fetchProfile = () => {
      getProfile(targetUserId).then(({ data }) => {
        console.log(data.profile);
        setTargetUser(data.profile);
      });
    };
    fetchProfile();
    setPostList(response.postList);
  }, [targetUserId]);

  const addPost = (newPost) => {
    setPostList([newPost,...postList]);
  }

  if (!targetUser || !postList) return null;

  return (
    <div
      className="u-flex u-flexColumn u-paddingHorizontalExtraLarge u-paddingVerticalLarge "
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
        <Button onClick={() => setIsPosting(true)}>
          <Button.Icon>
            <Icon size="medium" name="cloudUpload" />
          </Button.Icon>
          <Button.Label>Upload song</Button.Label>
        </Button>
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
      <Separator />
      <div className="u-flex u-flexColumn u-alignItemsCenter">
        {postList.map((post) => (
          <Post
            id={post.postId}
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
