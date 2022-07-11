/* eslint-disable import/prefer-default-export */
import { post, get ,put} from 'utils/request';

export const addPost = (newPost) => post('/post', { body: newPost });

export const addComment = (comment, postId) =>
  post('/post/comment', { body: { comment, postId } });

export const getCommentList = (postId) => get(`/post/${postId}/comment`);

export const toggleLikePost = (postId) => put(`/post/${postId}/like`);