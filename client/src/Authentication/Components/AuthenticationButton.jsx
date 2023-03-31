import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from '../../Redux/actionUser';
import { addProductUser, getUserByEmail, clearTheUser } from '../../Redux/actionUser';
import { getCart, getLocalCart, clearLocalStorageCart } from '../../Redux/actionCart'

const AuthenticationButton = () => {
  const dispatch = useDispatch()
  
  const { isAuthenticated, user } = useAuth0();
  let cart = JSON.parse(localStorage.getItem("cart"))
  const theUser = useSelector(state => state.user.theUser)
  
  useEffect(() => {
    if (isAuthenticated && !theUser.id) dispatch(createUser(user))
    .then(() => dispatch(addProductUser(cart)))
    .then(() => dispatch(getCart()))
    .then(window.localStorage.removeItem("cart"))
    .then(() => dispatch(clearLocalStorageCart()))
    if(!isAuthenticated && !theUser.id) dispatch(getLocalCart())
    if (!isAuthenticated && theUser.id) dispatch(clearTheUser());
  }, [user]);

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;