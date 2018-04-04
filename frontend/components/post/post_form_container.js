import { connect } from 'react-redux';
import { loginModal, signupModal, closeModal } from '../../actions/ui_actions';
import PostForm from './post_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    userHomeModal: state.ui.modals.user_home_modal
  };
};
