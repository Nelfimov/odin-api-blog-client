import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import propTypes from 'prop-types';
import useNotification from './Notification/useNotification';
import '../styles/Forms.css';

const Register = ({setLoggedIn}) => {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const emailInput = useRef();
  const secretInput = useRef();
  const notification = useNotification();
  const navigate = useNavigate();

  /**
   * Handle submission - send POST request to API
   * to register and get token.
   * @param {shape} e event
   */
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const response = await fetch(
          'http://localhost:2000/users/register/',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              username: usernameInput.current.value,
              email: emailInput.current.value,
              password: passwordInput.current.value,
              secret: secretInput.current.value,
            }),
          });

      const data = await response.json();
      notification.open(data.message);
      localStorage.setItem('token', JSON.stringify(data.token));
      setLoggedIn(true);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register form</h2>

      <div className="input">
        <label htmlFor="username">
          Username
        </label>
        <input
          required
          type="text"
          name="username"
          id="username"
          ref={usernameInput}
        />
      </div>

      <div className="input">
        <label htmlFor="email">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          ref={emailInput}
        />
      </div>

      <div className="input password">
        <label htmlFor="password">
          Password
        </label>
        <input
          required
          type="password"
          name="password"
          id="password"
          ref={passwordInput}
        />
      </div>

      <div className="input password">
        <label htmlFor="passwordConfirm">
          Confirm password
        </label>
        <input
          required
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
        />
      </div>

      <div className="input">
        <label htmlFor="secret">
          Enter your secret if you know one
        </label>
        <input
          type="text"
          name="secret"
          id="secret"
          ref={secretInput}
        />
      </div>

      <button>Register</button>
    </form>
  );
};

Register.propTypes = {
  setLoggedIn: propTypes.func.isRequired,
};

export default Register;
