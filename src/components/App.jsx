import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import '../styles/App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  /**
   * Check if JWT is present in cookies
   * @return {bool} true if exists, else false
   */
  function hasJWT() {
    return localStorage.getItem('token') ?
     setLoggedIn(true) :
      setLoggedIn(false);
  }

  useEffect(() => {
    hasJWT();
    console.log(loggedIn);
  });

  return (
    <>
      <Navbar loggedIn={loggedIn}/>
      <main>

      </main>
    </>
  );
};

export default App;
