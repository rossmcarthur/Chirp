import merge from 'lodash/merge';
import {
  POST_CREATE_MODAL,
  CLOSE_MODAL
} from '../actions/ui_actions';

const initialState = {
  session_modal: null
};

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_CREATE_MODAL:
    return merge({}, state, { user_home_modal: 'post_create' });
    case CLOSE_MODAL:
    return initialState;
    default:
    return state;
  }
};

export default modalReducer;
