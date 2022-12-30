import React, {useState, useEffect} from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Posts from './Posts';
import '../styles/App.css';
import Register from './Register';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    hasJWT();
  });

  /**
   * Check if JWT is present in cookies
   * @return {bool} true if exists, else false
   */
  function hasJWT() {
    return localStorage.getItem('token') ?
     setLoggedIn(true) :
      setLoggedIn(false);
  }

  return (
    <HashRouter>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <main>
        <Routes>
          <Route
            path='/'
            element={<Posts />}
          />
          <Route
            path='/login'
            element={<Login setLoggedIn={setLoggedIn} />}
          />
          <Route
            path='/register'
            element={<Register setLoggedIn={setLoggedIn}/>}
          />
        </Routes>
      </main>
    </HashRouter>
  );
};

export default App;
