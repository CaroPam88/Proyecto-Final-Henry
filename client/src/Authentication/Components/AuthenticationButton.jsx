import React from 'react';
import { useDispatch } from "react-redux";

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { findUser } from '../../Redux/actionUser';

const AuthenticationButton = () => {
  const dispatch = useDispatch()
  const [userFired, setUserFired] = useState(false);

  const { isAuthenticated, user } = useAuth0();

  if(isAuthenticated && !userFired) {
    dispatch(findUser(user));
    setUserFired(true); 
  }

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;