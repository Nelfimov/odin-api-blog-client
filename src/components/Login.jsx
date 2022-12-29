import React from 'react';
import '../styles/Forms.css';

const Login = () => {
  return (
    <form>
      <h2>Log In form</h2>
      <div className="input">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className="input">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button>Log In</button>
    </form>
  );
};

export default Login;
