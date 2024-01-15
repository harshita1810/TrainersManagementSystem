import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';  // Import useParams
import './OTPVerification.css';

const OTPVerification = () => {
  const navigate = useNavigate();
  const { email } = useParams();  // Use useParams to get the email from the route
  const [enteredOTP, setEnteredOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:3001/verify-otp', { email, otp: enteredOTP });
      setVerificationStatus(response.data.message);
      if (response.data.message === 'OTP verification successful. You can now log in.') {
        const redirectTimer = setTimeout(() => {
          navigate('/mainlogin'); 
        }, 2000);  // Use the route to your login page
        return () => clearTimeout(redirectTimer);
      }
    } catch (error) {
      console.error(error);
      setVerificationStatus('Error verifying OTP.');
    }
    
  };

  return (
    <div className='otpdiv'>
      <h2 className='firsthead'>OTP Verification</h2>
      <p>Enter the OTP sent to your email:</p>
      <input type="text" placeholder="Enter OTP" value={enteredOTP} onChange={(e) => setEnteredOTP(e.target.value)} />
      <button onClick={handleVerifyOTP} className='verifybtn'>Verify OTP</button>
      <p>{verificationStatus}</p>
    </div>
  );
};

export default OTPVerification;
