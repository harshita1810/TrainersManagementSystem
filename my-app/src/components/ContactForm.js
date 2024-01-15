import BasicExample from "./BasicExample";
import "./ContactForm.css";
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OTPVerificationContact from './OTPVerificationContact';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    emailSubject: '',
    message: '', // Added emailSubject state
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNo: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showOTPVerification, setShowOTPVerification] = useState(false);

  const handleSubmitContact = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    try {
      const result = await axios.post('http://localhost:3001/register-contact', formData);
      console.log(result);
      if (result.status === 200) {
        setShowOTPVerification(true);
        navigate(`/verify-otp-contact/${formData.email}`);
      } else {
        setErrorMessage('An error occurred while registering.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while registering.');
    }
  };

  const validateForm = () => {
    let valid = true;

    // Validate other fields...

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    }

    // Validate other fields...

    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <BasicExample />
      <section className="contact" id="contact" style={{ zIndex: 20 }}>
        <h2 className="heading">Contact <span>Us</span></h2>
        <form onSubmit={handleSubmitContact} className="contactform">
          <div className="input-box">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} autoComplete="none" onChange={handleChange} required />
            {errors.name && <span className='error'>{errors.name}</span>}
          {/* </div>
          <div className="input-box"> */}
            <input type="email" name='email' placeholder="Email Address" autoComplete="none" value={formData.email} onChange={handleChange} required />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>
          <div className="input-box">
            <input type="number" name='phoneNo' placeholder="Mobile Number" autoComplete="none" value={formData.phoneNo} onChange={handleChange} required />
            {errors.phoneNo && <span className='error'>{errors.phoneNo}</span>}
          {/* </div>
          <div className="input-box"> */}
            <input id="sub" type="text" placeholder="Email Subject" autoComplete="none" name="emailSubject" value={formData.emailSubject} onChange={handleChange} required />
          </div>
          <textarea name="message" id="txt" cols="30" rows="9" placeholder="Your Message" autoComplete="none" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="btn1">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
