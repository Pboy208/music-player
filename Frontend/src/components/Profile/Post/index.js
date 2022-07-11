/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import { Avatar, Separator, Icon, Button } from '@ahaui/react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { playSongNow } from 'store/songSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentList, toggleLikePost } from 'api/postAPIs';
import { timeSince } from 'utils/datetime';
import Comments from '../Comments';

export default function Post({ post, userId, targetUser }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLike, setIsLike] = useState(post?.liked);
  const [numberOfLike,setNumberOfLike] = useState(post?.numberOfLike);
  const [commentList, setCommentList] = useState(null);
  console.log(post);
  useEffect(() => {
    getCommentList(post.postId).then(({ data }) => setCommentList(data));
  }, [isCommenting, post.postId]);

  const likeHandler = () => {
    toggleLikePost(post.postId);
    setNumberOfLike((prev) => isLike? prev - 1 : prev+1);
    setIsLike((prev) => !prev);
  };

  const commentHandler = (content) => {
    const newComment = {
      createdAt: 'now',
      content,
      avatar: user.avatar,
      author: user.name,
      authorId: user.userID,
      commentId: new Date() + user.userID,
    };
    setCommentList((prev) => [newComment, ...prev]);
  };

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
          <div className="u-textPrimary">{timeSince(post.createdAt)}</div>
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
        <div>{`${numberOfLike} Like${
          numberOfLike <= 1 ? '' : 's'
        }`}</div>
        <div
          className="u-flex"
          style={{
            gap: 12,
          }}
        >
          <Button
            variant={isLike ? 'primary_outline' : 'secondary'}
            size="small"
            onlyIcon
            onClick={likeHandler}
          >
            <Button.Icon>
              <Icon size="medium" name="thumbsUp" />
            </Button.Icon>
          </Button>
          <Button
            variant={isCommenting ? 'primary_outline' : 'secondary'}
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
      {isCommenting && commentList && (
        <>
          <Separator />
          <Comments
            postId={post.postId}
            commentList={commentList}
            commentHandler={commentHandler}
            user={user}
          />
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
