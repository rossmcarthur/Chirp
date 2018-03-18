import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

sessionLinks() {
  return (
    <div>
      <div className="home-login">
        <form>
          <input
            type='text'
            className='login-email'
            value={this.state.email}
            placeholder='Email'
            onChange={this.update('email')}
            />
          <input
            type='password'
            className='login-password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.update('password')}/>
          <button className='login-submit' onClick={this.handleLogin}>Log in</button>
        </form>
      </div>
    <div className='home-signup'>
      <form>
        <input
          type='text'
          className='signup-email'
          value={this.state.email}
          placeholder='Email'
          onChange={this.update('email')}
          />
        <input
          type='password'
          className='signup-password'
          value={this.state.password}
          placeholder='Password'
          onChange={this.update('password')}/>
        <button className='signup-submit' onClick={this.handleSignup}>Get started</button>
      </form>
    </div>
</div>
);
}

Welcome(currentUser, logout) {
	<hgroup className="header-group">
    <h2 className="header-name">Hi!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>;
}

render() {
  return (
    this.props.currentUser ? Welcome(this.props.currentUser, this.props.logout) : this.sessionLinks()
  );
}

}

export default Home;
