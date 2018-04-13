import { connect } from 'react-redux';
import { postShowModal, closeModal } from '../../actions/ui_actions';
import PostShow from './post_show';

const mapStateToProps = state => {
  return {
    userHomeModal: state.ui.modals.userHomeModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postShowModal: () => dispatch(postShowModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (PostShow);
