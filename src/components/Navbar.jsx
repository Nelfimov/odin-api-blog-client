import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';
import '../styles/Navbar.css';

const Navbar = ({loggedIn}) => {
  return (
    <header>
      <span>LOGO</span>
      <div className="nav-links">
        <NavLink to='/'>Home</NavLink>
        {loggedIn === false ?
            <>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/register'>Register</NavLink>
            </> :
            <>
              <span>Welcome back</span>
              <NavLink to='/new'>New</NavLink>
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
