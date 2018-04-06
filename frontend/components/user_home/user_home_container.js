import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { postCreateModal, closeModal } from '../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import UserHome from './user_home';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    logout: () => dispatch(logout()),
    postCreateModal: () => dispatch(postCreateModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHome);
