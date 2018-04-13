import * as UserAPIUtil from '../util/user_util';

const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = user => dispatch => {
  return UserAPIUtil.fetchUser(user).then(user => {
    return dispatch(receiveUser(user));
  });
};
