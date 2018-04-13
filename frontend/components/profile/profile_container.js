import {  connect  } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  debugger
  const username = ownProps.match.params.username;
  return {
    currentUser: state.session.currentUser,
    username: username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: user => dispatch(fetchUser(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
