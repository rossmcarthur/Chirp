import { connect } from 'react-redux';
import { postShowModal, closeModal } from '../../actions/ui_actions';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    modal: Boolean(state.ui.modals.component)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    postShowModal: component => dispatch(postShowModal(component)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
