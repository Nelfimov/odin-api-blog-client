import React, {useRef} from 'react';
import useNotification from './Notification/useNotification';
import propTypes from 'prop-types';
import '../styles/Forms.css';

const Login = ({setLoggedIn}) => {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const feedback = useRef();
  const notification = useNotification();

  /**
   * Handle submission - send POST request to API to receive.
   * @param {shape} e event
   */
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const response = await fetch('http://localhost:2000/users/login/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameInput.current.value,
          password: passwordInput.current.value,
        }),
      });

      const data = await response.json();

      console.log(data);
      notification.open(data.message);
      localStorage.setItem('token', JSON.stringify(data.token));
      setLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In form</h2>
      <div className="input">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameInput}
        />
      </div>
      <div className="input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordInput}
        />
      </div>
      <button>Log In</button>
      <div className="feedback" ref={feedback}></div>
    </form>
  );
};

Login.propTypes = {
  setLoggedIn: propTypes.func,
};

export default Login;
