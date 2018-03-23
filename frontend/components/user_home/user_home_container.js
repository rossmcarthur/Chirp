import { connect } from 'react-redux';
import { fetchChirps } from '../../actions/chirp_actions';
import UserHome from './user_home';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChirps: () => dispatch(fetchChirps()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHome);
