import React from 'react';
import { Link } from 'react-router-dom';
import UserHomeContainer from '../user_home/user_home_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: '',
        password: '',
      },
      signup: {
        email: '',
        password: '',
      },
      errors: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.signup(this.state.signup);
    this.setState({
      errors: 'signup'
    });
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.login(this.state.login);
    this.setState({
      errors: 'login'
    });
  }

  update(form, field) {
    return e => this.setState({
      [form]: Object.assign({}, this.state[form], {
         [field]: e.currentTarget.value,
       }),
     });
  }

  renderErrors() {
    return(
        <ul className="errors-list">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
    );
  }

sessionLinks() {
  return (
    <div className='homepage'>
      <div className='home-left-page'>
        <div className='home-left-text-box'>
          <p className='home-left-text'><i className="fas fa-search"></i>&nbsp;&nbsp;&nbsp; Follow your curiosity.</p>
          <p className='home-left-text'><i className="fas fa-quote-right"></i>&nbsp;&nbsp;&nbsp;See what people are saying.</p>
          <p className='home-left-text'><i className="far fa-comment"></i>&nbsp;&nbsp;&nbsp;Join in.</p>
        </div>
      </div>
      <div className='homepage-right'>
        <div className="home-login">
          <form>
            <input
              type='text'
              className='login-email'
              value={this.state.email}
              placeholder='Email'
              onChange={this.update('login', 'email')}
              />
            <input
              type='password'
              className='login-password'
              value={this.state.password}
              placeholder='Password'
              onChange={this.update('login', 'password')}/>
            <button className='login-submit' onClick={this.handleLogin}>Log in</button>
          </form>
          {this.state.errors === 'login' ? this.renderErrors() : null}
        </div>
        <div className='home-signup-text'>
          <img className='home-logo' src={window.staticImages.ChirpLogo} />
          <p className='home-text1'>See what's happening in the world right now</p>
          <p className='home-text2'>Join Chirp today.</p>
          <div className='home-signup'>
            <form className='signup-form'>
              <input
                type='text'
                className='signup-email'
                value={this.state.email}
                placeholder='Email'
                onChange={this.update('signup', 'email')}
                />
              {this.state.errors === 'signup' ? this.renderErrors() : null}
              <input
                type='password'
                className='signup-password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.update('signup', 'password')}/>
              <button className='signup-submit' onClick={this.handleSignup}>Get started</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

render() {
  return (
    this.props.currentUser ? <UserHomeContainer /> : this.sessionLinks()
  );
}

}

export default Home;
