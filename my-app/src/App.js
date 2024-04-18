// first we will install react router dom then we will import 
// import.{BrowserRouter.as.Router,.Routes,.Route}.from.'react-router-dom'}

// Assign
// create a porfolio website with a beautiful landing page and there should be home page 
// and lnading page condider in home about me my projects github and deployed projects 
// skills set



import './App.css';
import BasicExample from './components/BasicExample';
import Cards from './components/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import TrainerList from './components/TrainerList';
import TrainerList1 from './components/TrainerList1';
import TrainerList2 from './components/TrainerList2';
import TrainerList3 from './components/TrainerList3';
import TrainerList4 from './components/TrainerList4';
import TrainerList5 from './components/TrainerList5';
import TrainerList6 from './components/TrainerList6';
import Counter from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSignUp from './components/MainSingUp';
import MainLogin from './components/MainLogin';
import OTPVerification from './components/OTPVerification';
import OTPVerificationContact from './components/OTPVerificationContact';
import Companies from './components/Companies';
import Privateroute from './components/Privateroute';

function App() {

  return (
    <div className="App">
      <Router>
      {/* <TrainerManagement /> */}
        {/* <BasicExample /> */}
        <Routes>
          <Route path='/' element={<MainSignUp />}></Route>
          <Route path='/mainlogin' element={<MainLogin />}></Route>
          <Route path='/mainsignup' element={<MainSignUp />}></Route>
          <Route path="/register" component={MainSignUp} />
          <Route element={<Privateroute />}>
            <Route path='cards' element={<Cards />} />
            <Route path='dashBoard' element={<DashBoard />} exact/>
            <Route path='login' element={<Login />} />
            <Route path='loginform' element={<LoginForm />} />
            <Route path='trainerlist' element={<TrainerList />} />
            <Route path='trainerlist1' element={<TrainerList1 />} />
            <Route path='trainerlist2' element={<TrainerList2 />} />
            <Route path='trainerlist3' element={<TrainerList3 />} />
            <Route path='trainerlist4' element={<TrainerList4 />} />
            <Route path='trainerlist5' element={<TrainerList5 />} />
            <Route path='trainerlist6' element={<TrainerList6 />} />
            <Route path='counter' element={<Counter />} />
            <Route path="verify-otp/:email" element={<OTPVerification />} />
            <Route path="verify-otp-contact/:email" element={<OTPVerificationContact />} />
            <Route path='companies' element={<Companies />} />
          </Route>
          {/* <Route path='/companies' element={<Companies />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
