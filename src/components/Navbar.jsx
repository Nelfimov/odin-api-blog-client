import React from 'react';
import propTypes from 'prop-types';
import '../styles/Navbar.css';

const Navbar = (loggedIn) => {
  return (
    <header>
      <span>LOGO</span>
      <div className="nav-links">
        <a href="">Home</a>
        {!loggedIn &&
        <>
          <a href="">Login</a>
          <a href="">Register</a>
        </>
        }
      </div>
    </header>
  );
};

Navbar.propTypes = {
  loggedIn: propTypes.bool.isRequired,
};

export default Navbar;
