import { connect } from 'react-redux';
import { fetchPosts, fetchPost, createPost } from '../../actions/post_actions';
import UserHome from './user_home';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post)),
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHome);
