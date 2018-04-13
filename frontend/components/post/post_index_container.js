import { connect } from 'react-redux';
import { createPost, fetchPost } from '../../actions/post_actions';
import { postShowModal, closeModal } from '../../actions/ui_actions';
import PostIndex from './post_index';

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts),
    currentUser: state.session.currentUser,
    userHomeModal: state.ui.modals.user_home_modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    postShowModal: () => dispatch(postShowModal()),
    closeModal: () => dispatch(closeModal()),
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
