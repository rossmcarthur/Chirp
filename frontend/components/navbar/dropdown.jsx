import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  handleShow() {
    return (
      this.state.show ? this.setState({ show: false}) : this.setState({ show: true })
    );
  }

  dropdownShow() {
    return (
      <div className='dropdown-full'>
        <button className='dropdown-profile'>Profile</button>
        <button className='dropdown-logout' onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }

  render() {
    return (
      <div>
      <button className='user-dropdown' onClick={this.handleShow}> PHOTO </button>
      {this.state.show ? this.dropdownShow() : null}
    </div>
  );
  }

}

export default connect(null, mapDispatchToProps)(Dropdown);
