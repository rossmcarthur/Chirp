import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postCreateModal, closeModal } from '../../actions/ui_actions';
import Dropdown from './dropdown';

const mapDispatchToProps = dispatch => {
  return {
    postCreateModal: () => dispatch(postCreateModal())
  };
};

class Navbar extends React.Component  {
  constructor(props) {
    super(props);
    this.handlePostModal = this.handlePostModal.bind(this);
  }

  handlePostModal() {
    this.props.postCreateModal();
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
  null,
  mapDispatchToProps
  )(Navbar);
