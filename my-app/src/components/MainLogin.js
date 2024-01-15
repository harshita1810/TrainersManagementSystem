import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './MainLogin.css';
import back from '../assets/back.png';

const MainLogin = ({onLogin}) => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate=useNavigate();
    axios.defaults.withCredentials=true;
    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.post('http://localhost:3001/login', {email, password})
        axios.post('https://trainers-management-system.vercel.app/login', {email, password})
        .then(result => {console.log(result)
            if(result.data ==="Success"){
                navigate('/dashboard')
            }
            else{
                setErrorMessage('Username or Password is Incorrect.');
            }
        })
        .catch(err => {
            console.log(err)
            setErrorMessage('An error occurred while logging in.');
        })
    }

    const handleEmailChange = () => {
        if (errorMessage) {
          setErrorMessage('');
        }
      };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 regi">
      <div className="p-3 rounded w-25 shadow bg-white roob">
        <h2 className="text-center fw-bold heads">Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="email" placeholder="Enter email" autocomplete="off" name="email" className="form-control rounded-0" onChange={(e)=>{ setEmail(e.target.value); handleEmailChange(); }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input type="password" placeholder="Enter password" autocomplete="off" name="password" className="form-control rounded-0" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn w-100 rounded-0 regis btn-success regis">Login</button>
        </form>
        {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
        <p>Don't Have an Account?</p>
        <Link to="/mainsignup" className='btn btn-default border w-100 regist rounded-0 bg-light text-decoration-none'>Register</Link>
      </div>
      <div className='common'>
      <img  src={back}
              width="880"
              height="585"
              className="common1"
              alt="React Bootstrap logo"
            />
      </div>
    </div>
  )
}

export default MainLogin