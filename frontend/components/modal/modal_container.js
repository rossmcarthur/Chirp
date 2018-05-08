import { connect } from 'react-redux';
import { closeModal } from '../../actions/ui_actions';
import Modal from './modal';

const mapStateToProps = state => {
  debugger
  return {
    component: state.ui.modals.component,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
