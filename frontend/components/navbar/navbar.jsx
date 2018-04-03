import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <Link to='/'>
        <button className='home-button'>Home</button>
      </Link>
      <Link to='/'>
        <img className='user-home-logo' src={window.staticImages.ChirpLogo} />
      </Link>
      <div className='right-nav-links'>
        <Dropdown />
        <button className='post-button'>Chirp</button>
      </div>
    </nav>
  );
};

export default Navbar;
