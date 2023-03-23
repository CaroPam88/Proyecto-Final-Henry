import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from '../../Redux/actionUser';

const AuthenticationButton = () => {
  const dispatch = useDispatch()
  // const [userFired, setUserFired] = useState(false);
  
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(createUser(user));
    }
  }, [isAuthenticated]);


  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;