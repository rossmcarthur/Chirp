import merge from 'lodash/merge';
import {
  RECEIVE_POSTS,
  RECEIVE_POST
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    default:
      return state;
  }
};

export default postsReducer;
