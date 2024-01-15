import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OTPVerification from './OTPVerification';
import './MainLogin.css';
import back from '../assets/back.png';


const MainSignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [showOTPVerification, setShowOTPVerification] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Add your password regex validation here
    // Example: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const isUsernameValid = (username) => {
    // Add your username regex validation here
    // Example: Minimum 3 words
    const usernameRegex = /^(\S+\s*){3,}$/;
    return usernameRegex.test(username);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isEmailValid(email)) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }

      if (!isPasswordValid(password)) {
        setErrorMessage('Please enter a valid password.');
        return;
      }

      if (!isUsernameValid(name)) {
        setErrorMessage('Please enter a valid username with a minimum of 3 words.');
        return;
      }

      const result = await axios.post('http://localhost:3001/register', { name, email, password });
      console.log(result);

      if (result.status === 200) {
        setShowOTPVerification(true);
        navigate(`/verify-otp/${email}`);
      } else {
        setErrorMessage('An error occurred while registering.');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('This email is already registered. Please use a different email.');
      } else {
        console.error(error);
        setErrorMessage('An error occurred while registering.');
      }
    }
  };

  const handleEmailChange = () => {
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 regi">
      <div className="p-3 rounded shadow w-25 bg-white roob">
        <h2 className="text-center fw-bold heads">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              required
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              required
              className="form-control rounded-0"
              onChange={(e) => { setEmail(e.target.value); handleEmailChange(); }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Create password"
              autoComplete="off"
              required
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn w-100 rounded-0 regis">
            Register
          </button>
        </form>
        {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
        <p>Already Have an Account?</p>
        <Link to="/mainlogin" className="btn btn-default border w-100 regist rounded-0 bg-light text-decoration-none">
          Login
        </Link>
      </div>
      {showOTPVerification && <OTPVerification email={email} />}
      <div className='common'>
      <img  src={back}
              width="880"
              height="585"
              className="common1"
              alt="React Bootstrap logo"
            />
      </div>
    </div>
  );
};

export default MainSignUp;
