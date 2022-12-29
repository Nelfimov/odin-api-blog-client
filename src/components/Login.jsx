import React from 'react';

const Login = () => {
  return (
    <form>
      <label htmlFor="username"></label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button>Log In</button>
    </form>
  );
};

export default Login;
