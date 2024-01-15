// import './App.css';
// import React from 'react';
// import BasicExample from './components/BasicExample';
// import Cards from './components/Cards';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import DashBoard from './components/DashBoard';
// import Create from './components/Create';
// import Login from './components/Login';
// import LoginForm from './components/LoginForm';
// // import React, { PureComponent } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// function App() {
//   const data = [
//     {
//       name: 'Page A',
//       value: 5,
//     },
//     {
//       name: 'Page B',
//       value : 4,
//     },
//     {
//       name: 'Page C',
//       value: 4,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];
//   return (
//     <>
//     <div className="App">
//      <Router>
//      <BasicExample />
//       <Routes>
//         <Route path='/' element={<DashBoard />}></Route>
//         <Route path='/cards' element={<Cards />}></Route>
//         <Route path='/dashBoard' element={<DashBoard />}></Route>
//         <Route path='/login' element={<Login />}></Route>
//         <Route path='/loginform' element={<LoginForm />}></Route>
//       </Routes> 
//       {/* <Create /> */}
//     </Router>
    
//     <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//           barSize={20}
//         >
//           <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
//         </BarChart>
//       </ResponsiveContainer>
//       </div>
//       </>
//   );
// }
// export default App;


// first we will install react router dom then we will import 
// import.{BrowserRouter.as.Router,.Routes,.Route}.from.'react-router-dom'}

// Assign
// create a porfolio website with a beautiful landing page and there should be home page 
// and lnading page condider in home about me my projects github and deployed projects 
// skills set



import './App.css';
import React from 'react';
import BasicExample from './components/BasicExample';
import Cards from './components/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
// import TrainerManagement from './components/TrainerManagment';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <TrainerManagement /> */}
        {/* <BasicExample /> */}
        <Routes>
          <Route path='/' element={<MainSignUp />}></Route>
          <Route path='/cards' element={<Cards />}></Route>
          <Route path='/dashBoard' element={<DashBoard />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/loginform' element={<LoginForm />}></Route>
          <Route path='/trainerlist' element={<TrainerList />}></Route>
          <Route path='/trainerlist1' element={<TrainerList1 />}></Route>
          <Route path='/trainerlist2' element={<TrainerList2 />}></Route>
          <Route path='/trainerlist3' element={<TrainerList3 />}></Route>
          <Route path='/trainerlist4' element={<TrainerList4 />}></Route>
          <Route path='/trainerlist5' element={<TrainerList5 />}></Route>
          <Route path='/trainerlist6' element={<TrainerList6 />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/mainlogin' element={<MainLogin />}></Route>
          <Route path='/mainsignup' element={<MainSignUp />}></Route>
          <Route path="/register" component={MainSignUp} />
          <Route path="/verify-otp/:email" element={<OTPVerification />} />
          <Route path="/verify-otp-contact/:email" element={<OTPVerificationContact />} />
          <Route path='/companies' element={<Companies />} />
          {/* <Route path='/companies' element={<Companies />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
