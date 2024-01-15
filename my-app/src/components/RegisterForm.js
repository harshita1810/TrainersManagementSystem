import React, {useState} from 'react'
import { FaBeer } from 'react-icons/fa';
import { GiAbstract023 } from 'react-icons/gi'
import { WiDaySprinkle } from 'react-icons/wi';
import { BsShareFill } from 'react-icons/bs';

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        number: '',
        password: '',
    });

    const validateForm = () => {
        let valid = true;

        if(!formData.username.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: 'Username is required',
            }))
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: '',
            }));
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required'
            }));
            valid = false;
        } else if (!emailRegex.test(formData.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address',
            }));
            valid =  false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
            }))
        }

        const mobileRegex = /^[0]?[6789]\d{9}$/;
        if(!formData.number.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                number: 'Mobile Number is required'
            }));
            valid = false;
         } else if (!mobileRegex.test(formData.number)) {
            console.log(!mobileRegex.test(formData.number));
            setErrors((prevErrors) => ({
                ...prevErrors,
                number: 'Number must be at least 10 characters long',
            }));
            valid = false;
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    number: '',
                }))
            }
        

        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if(!formData.password.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required'
            }));
            valid = false;
        } else if (!passwordRegex.test(formData.password)) {
            console.log(!passwordRegex.test(formData.password));
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password must be at least 8 characters long and contain at least one letter and one number',
            }));
            valid =  false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: '',
            }))
        }
        return valid;
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if(validateForm()) {
    //         console.log('Form Data:', formData);
    //     } else {
    //         console.log('Form validation failed');
    //     }
    //     axios.post('http://localhost:3001/register', formData)
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    //     if(validateForm()) {
    //         navigate('/login');
    //     }
    //     else {
    //         console.log('cannot click');
    //     }
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

  return (
    <>
      <form className='registration-form'>
      <h2>Registration Form</h2>
        <div className='form-group'>
        <GiAbstract023 />
            <label>Username:</label>
            <input type='text' name='username' value={formData.username} onChange={handleChange} />
            {errors.username && <span className='error'>{errors.username}</span>}
        </div>
        <div className='form-group'>
        <WiDaySprinkle />
            <label>Email:</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} />
            {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className='form-group'>
        <WiDaySprinkle />
            <label>Mobile Number:</label>
            <input type='number' name='number' value={formData.number} onChange={handleChange} />
            {errors.number && <span className='error'>{errors.number}</span>}
        </div>
        <div className='form-group'>
            <label>Password:</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange} />
            {errors.password && <span className='error'>{errors.password}</span>}
        </div>
        <button className='submit-button'>Login</button>
        
        <button className='share-button'>
            <BsShareFill />
        </button>
        <FaBeer />
    </form>
  </>
  )
}

export default RegisterForm