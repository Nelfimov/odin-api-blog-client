import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';
import '../styles/Navbar.css';

const Navbar = ({loggedIn, setLoggedIn}) => {
  /**
   * Delete token from local storage
   */
  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  return (
    <header>
      <span>Blog Client</span>
      <div className="nav-links">
        <NavLink to='/'>Home</NavLink>
        {loggedIn === false ?
            <>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/register'>Register</NavLink>
            </> :
            <>
              <NavLink to='/new'>New</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
        }
      </div>
    </header>
  );
};

Navbar.propTypes = {
  loggedIn: propTypes.bool.isRequired,
  setLoggedIn: propTypes.func.isRequired,
};

export default Navbar;
