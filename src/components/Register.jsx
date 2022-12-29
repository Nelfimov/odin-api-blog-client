import React from 'react';
import '../styles/Forms.css';

const Register = () => {
  return (
    <form>
      <h2>Register form</h2>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="password">Password</label>
      <input type="text" name="password" id="password" />

      <label htmlFor="passwordConfirm">Confirm password</label>
      <input type="text" name="passwordConfirm" id="passwordConfirm" />

      <label htmlFor="secret">Enter your secret if you know one</label>
      <input type="text" name="secret" id="secret" />

      <button>Register</button>
    </form>
  );
};

export default Register;
