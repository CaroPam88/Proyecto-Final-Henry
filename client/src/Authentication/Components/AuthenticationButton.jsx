import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from '../../Redux/actionUser';
import { addProductUser } from '../../Redux/actionUser';

const AuthenticationButton = () => {
  const dispatch = useDispatch()
  
  const { isAuthenticated, user } = useAuth0();
  let cart = JSON.parse(localStorage.getItem("cart"))
  const { id } = useSelector(state => state.user.theUser)

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(createUser(user));
      dispatch(addProductUser(cart, id))
    }
  }, [user]);

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;