/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { Avatar, Separator, Icon, Button } from '@ahaui/react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { playSongNow } from 'store/songSlice';
import { useDispatch } from 'react-redux';
import Comments from '../Comments';
import { User } from '../dummyData';

const postDefault = {
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

export default function Post({ post = postDefault, userId }) {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState(User);
  const [isCommenting, setIsCommenting] = useState(false);
  return (
    <div
      className="u-backgroundNeutral20	u-flex u-flexColumn u-paddingHorizontalLarge u-paddingTopLarge u-paddingBottomSmall u-marginBottomMedium u-border u-roundedLarge "
      style={{
        gap: 12,
        width: '80%',
        borderColor: '--color-primary',
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
      <div>{post.content}</div>
      <Separator />
      <MusicWrapper
        className="u-flex u-flexColumn u-alignItemsCenter u-justifyContentCenter u-positionRelative"
        style={{ gap: 16, width: 480, margin: '12px auto' }}
        onClick={() => dispatch(playSongNow(post.song))}
      >
        <audio src={post.song.urlMusic} />
        <img
          src={post.song.urlImage}
          style={{
            height: 480,
            width: 480,
            objectFit: 'cover',
          }}
        />
        <div
          className="u-positionAbsolute u-backgroundNeutral100 u-flex u-justifyContentCenter u-alignItemsCenter play"
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.6,
          }}
        >
          <BsFillPlayCircleFill style={{ fontSize: 40 }} />
        </div>
      </MusicWrapper>
      <div className="u-text600" style={{ maxWidth: 520, margin: '0 auto' }}>
        {post.song.name}
      </div>
      <Separator />
      <div className="u-flex u-justifyContentBetween u-alignItemsCenter">
        <div>{`${post.numberOfLike} Like${
          post.numberOfLike === 1 ? null : 's'
        }`}</div>
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

const MusicWrapper = styled.div`
  & .play {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover .play {
    display: flex;
  }
`;
