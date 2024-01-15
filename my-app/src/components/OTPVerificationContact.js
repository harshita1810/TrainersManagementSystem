import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './OTPVerification.css';

const OTPVerificationContact = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  const [otp, setOtp] = useState('');
  const [verificationError, setVerificationError] = useState('');

  const handleVerifyOTPContact = async () => {
    try {
      const response = await axios.post('http://localhost:3001/verify-otp-contact', { email, otp: otp });
      setVerificationError(response.data.message);
      if (response.data.message === 'OTP verification successful. Your message has been sent successfully') {
        const redirectTimer = setTimeout(() => {
          navigate('/dashBoard'); 
        }, 2000);
        return () => clearTimeout(redirectTimer);
      }
    } catch (error) {
      console.error(error);
      setVerificationError('Error verifying OTP. Please try again.');
    }
  };

  return (
    <div className='otpdiv'>
      <h2 className='firsthead'>OTP Verification</h2>
      <p>Check your email for the OTP and enter it below:</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOTPContact} className='verifybtn'>Verify OTP</button>
      <p>{verificationError}</p>
    </div>
  );
};

export default OTPVerificationContact;
