import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from '../../Redux/actionUser';
import { addProductUser, clearTheUser } from '../../Redux/actionUser';

const AuthenticationButton = () => {
  const dispatch = useDispatch()
  
  const { isAuthenticated, user } = useAuth0();
  let cart = JSON.parse(localStorage.getItem("cart"))
  const theUser = useSelector(state => state.user.theUser)
  
  useEffect(() => {
    if (isAuthenticated && !theUser.length) dispatch(createUser(user));
    if (isAuthenticated && theUser.length) dispatch(addProductUser(cart, theUser.id))
    if (!isAuthenticated && theUser.length) dispatch(clearTheUser())
  }, [user]);

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;