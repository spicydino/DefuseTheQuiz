import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext'
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccessful, setLoginSuccessful] = useState(false); 
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    try {
      const response = await fetch('http://localhost:3000/Login/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser({ username: data.user.username, email: data.user.email });
        setLoginSuccessful(true); 
        setTimeout(() => {
          navigate('/'); 
        }, 2000);
      } else {
        setErrorMessage(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 8);
  };

  return (
    <div className="login-container">
      {loginSuccessful ? (
        <div className="success-message">
          Login Successful! Redirecting to homepage...
        </div>
      ) : (
        <>
          <h2 className="login-heading">Login to Valorant Quiz</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email" className="login-label">Email address:</label>
              <input
                type="email"
                id="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="login-label">Password:</label>
              <input
                type="password"
                id="password"
                className="login-input"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {!passwordValid && (
                <div className="password-error">
                  Password must be at least 8 characters long.
                </div>
              )}
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <button
              type="submit"
              className="login-button"
              disabled={!passwordValid}
            >
              Login
            </button>
          </form>
          <p className="signup-text">
            Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
