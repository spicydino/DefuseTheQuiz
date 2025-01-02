import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false); 

  const navigate = useNavigate(); 

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 8);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = { name, email, password };

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();

      if (response.ok) {
        setSignupSuccess(true); 
        console.log('Signup Successful:', data);
        
        setTimeout(() => {
          navigate('/login');
        }, 3000); 
      } else {
        setErrorMessage(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An error occurred during signup');
    }
  };

  if (signupSuccess) {
    return (
      <div className="signup-container">
        <h2 className="signup-heading">Signup Successful!</h2>
        <p>You can now login with your credentials.</p>
        <Link to="/login" className="login-link">Go to Login Page</Link>
      </div>
    );
  }

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" className="signup-label">Username</label>
          <input
            type="text"
            id="name"
            className="signup-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email" className="signup-label">Email</label>
          <input
            type="email"
            id="email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="signup-label">Password</label>
          <input
            type="password"
            id="password"
            className="signup-input"
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
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          className="signup-button"
          disabled={!passwordValid}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
