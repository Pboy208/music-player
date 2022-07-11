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

export default function Post({ post, userId, targetUser }) {
  const dispatch = useDispatch();
  const [isCommenting, setIsCommenting] = useState(false);
  return (
    <div
      className="u-backgroundNeutral20	u-flex u-flexColumn  u-marginBottomMedium u-border u-roundedLarge "
      style={{
        gap: 12,
        width: '80%',
        maxWidth: 800,
        // borderColor: '--color-primary',
        marginBottom: 60,
        padding: 'var(--post-padding)',
      }}
    >
      <div className="u-flex">
        <div className="u-marginRightSmall">
          <Avatar
            src={targetUser.avatar}
            size="large"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="u-flexGrow1">
          <strong className="u-text400">{targetUser.name}</strong>
          <div className="u-textPrimary">4 hours ago</div>
        </div>
      </div>
      <div>{post.content}</div>
      <Separator />
      <MusicWrapper
        className="u-flex u-flexColumn u-alignItemsCenter u-justifyContentCenter u-positionRelative"
        style={{
          gap: 16,
          width: '60vw',
          height: '60vw',
          maxHeight: 400,
          maxWidth: 400,
          margin: '12px auto',
        }}
        onClick={() => dispatch(playSongNow(post.song))}
      >
        <audio src={post.song.urlMusic} />
        <img
          src={post.song.urlImage}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: 400,
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
