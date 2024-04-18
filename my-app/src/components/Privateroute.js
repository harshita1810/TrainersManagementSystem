import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Privateroute = ({children, ...rest}) => {
  let isLoggedIn = {'token':false}

   let check = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  };
  isLoggedIn.token=check().isLoggedIn==true?true:false;
  return(
    isLoggedIn.token ? <Outlet/> : <Navigate to ="/mainlogin" />
  )
}

export default Privateroute;