import { connect } from 'react-redux';
import { postCreateModal, closeModal } from '../../actions/ui_actions';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    userHomeModal: state.ui.modals.user_home_modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    postCreateModal: () => dispatch(postCreateModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
