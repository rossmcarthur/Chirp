import merge from 'lodash/merge';
import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/ui_actions';

const modalReducer = (state = false, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return merge({}, state, { modal: true });
    case CLOSE_MODAL:
      return merge({}, state, { modal: false });
    default:
      return state;
  }
};

export default modalReducer;
