import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal, closeModal } from '../../actions/ui_actions';
import { createPost } from '../../actions/post_actions';
import PostForm from '../post/post_form';
import Modal from '../modal/modal_container';
import Dropdown from './dropdown';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: component => dispatch(showModal(component)),
    closeModal: () => dispatch(closeModal()),
    createPost: post => dispatch(createPost(post))
  };
};

class Navbar extends React.Component  {
  constructor(props) {
    super(props);
    this.handlePostModal = this.handlePostModal.bind(this);
  }

  handlePostModal() {
    this.props.showModal(
      <PostForm currentUser={this.props.currentUser} modal={true} closeModal={this.props.closeModal} createPost={this.props.createPost} />
    );
  }

  render() {
    return (
      <nav className='navbar-container'>
        <Link to='/'>
          <button className='home-button'><i className="fas fa-home"></i>Home</button>
        </Link>
        <Link to='/'>
          <img className='user-home-logo' src={window.staticImages.ChirpLogo} />
        </Link>
        <div className='right-nav-links'>
          <Dropdown />
          <button className='post-button' onClick={this.handlePostModal}>Chirp</button>
        </div>
      </nav>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Navbar);
