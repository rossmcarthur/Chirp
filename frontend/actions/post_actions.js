import * as PostAPIUtil from '../util/post_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';


export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  };
};

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchPosts().then(posts => {
    return dispatch(receivePosts(posts));
  });
};

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post).then(post => {
    return dispatch(receivePost(post));
  });
};
