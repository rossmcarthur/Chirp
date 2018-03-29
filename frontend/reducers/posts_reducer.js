import merge from 'lodash/merge';
import {
  RECEIVE_POSTS
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default postsReducer;
