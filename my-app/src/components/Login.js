import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import BasicExample from './BasicExample';


const Login = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Username and password are required');
    } else if (isAdmin) {
      if (username === 'Harshita' && password === 'harshita2003') {
        setErrorMessage('Login successful! Redirecting...');
        setRedirecting(true);
      } else {
        setErrorMessage('Username or password is wrong');
      }
    } else {
      setErrorMessage('You cannot log in if you are not an admin');
    }
  };

  useEffect(() => {
    if (redirecting) {
      const redirectTimer = setTimeout(() => {
        navigate('/loginform'); 
      }, 2000);

      return () => clearTimeout(redirectTimer);
    }
  }, [redirecting, navigate]);

  useEffect(() => {
    // Reset error message when username or password changes
    setErrorMessage('');
  }, [username, password, isAdmin]);

  return (
    <>
    <BasicExample />
    <div className='outerdiv'>
      <div className='logindiv'>
        <h2 className='head'>Admin Login</h2>
        <form className='loginform'>
          <input
            type='text'
            placeholder='Username'
            className='form-text'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // required 
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            className='form-text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className='label'>I am Admin</label>
          <input
            type='checkbox'
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
          /><br></br>

          <label className='label'>Show Password</label>
          <input
            type='checkbox'
            checked={showPassword}
            onChange={handlePasswordToggle}
          />
        </form>

        <button className='loginbutton' onClick={handleLogin}>
          Login
        </button>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </div>
    </div>
    </>
  );
};

export default Login;




// import React, { useState, useEffect } from 'react';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';
// import BasicExample from './BasicExample';

// const Login = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [redirecting, setRedirecting] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [minLengthValid, setMinLengthValid] = useState(false);
//   const [capitalLetterValid, setCapitalLetterValid] = useState(false);
//   const [smallLetterValid, setSmallLetterValid] = useState(false);
//   const [digitValid, setDigitValid] = useState(false);
//   const [specialCharacterValid, setSpecialCharacterValid] = useState(false);

//   const handlePasswordToggle = () => {
//     setShowPassword(!showPassword);
//   };

//   const validatePassword = (value) => {
//     setMinLengthValid(value.length >= 8);
//     setCapitalLetterValid(/[A-Z]/.test(value));
//     setSmallLetterValid(/[a-z]/.test(value));
//     setDigitValid(/\d/.test(value));
//     setSpecialCharacterValid(/[!@#$%^&*(),.?":{}|<>]/.test(value));

//     return (
//       minLengthValid &&
//       capitalLetterValid &&
//       smallLetterValid &&
//       digitValid &&
//       specialCharacterValid
//     );
//   };

//   const handleLogin = () => {
//     const isValidPassword = validatePassword(password);

//     if (!username || !password || !isValidPassword) {
//       setErrorMessage('You have to complete all the requirements for the password');
//     } else if (isAdmin) {
//       if (username === 'Harshita' && password === 'harshita2003') {
//         setErrorMessage('Login successful! Redirecting...');
//         setRedirecting(true);
//       } else {
//         setErrorMessage('Username or password is wrong');
//       }
//     } else {
//       setErrorMessage('You cannot log in if you are not an admin');
//     }
//   };

//   useEffect(() => {
//     if (redirecting) {
//       const redirectTimer = setTimeout(() => {
//         navigate('/loginform');
//       }, 2000);

//       return () => clearTimeout(redirectTimer);
//     }
//   }, [redirecting, navigate]);

//   useEffect(() => {
//     // Reset error message when username or password changes
//     setErrorMessage('');
//   }, [username, password, isAdmin]);

//   return (
//     <>
//       <BasicExample />
//       <div className='outerdiv'>
//         <div className='logindiv'>
//           <h2 className='heading'>Admin Login</h2>
//           <form className='loginform'>
//             <input
//               type='text'
//               placeholder='Username'
//               className='form-text'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder='Password'
//               className='form-text'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <div className='password-requirements'>
//               <p style={{ color: minLengthValid ? 'green' : 'red' }}>
//                 The password must contain at least 8 characters.
//               </p>
//               <p style={{ color: capitalLetterValid ? 'green' : 'red' }}>
//                 The password must contain at least one capital letter.
//               </p>
//               <p style={{ color: smallLetterValid ? 'green' : 'red' }}>
//                 The password must contain at least one small letter.
//               </p>
//               <p style={{ color: digitValid ? 'green' : 'red' }}>
//                 The password must contain at least one digit.
//               </p>
//               <p style={{ color: specialCharacterValid ? 'green' : 'red' }}>
//                 The password must contain at least one special character.
//               </p>
//             </div>
//             <label className='label'>I am Admin</label>
//             <input type='checkbox' checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />
//             <br></br>

//             <label className='label'>Show Password</label>
//             <input type='checkbox' checked={showPassword} onChange={handlePasswordToggle} />
//           </form>

//           <button className='loginbutton' onClick={handleLogin}>
//             Login
//           </button>
//           {errorMessage && <div className='error-message'>{errorMessage}</div>}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;


