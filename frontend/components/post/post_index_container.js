import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
