import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import {Auth0Provider} from '@auth0/auth0-react';

//const domain = process.env.REACT_APP_AUTH0_DOMAIN
//const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const domain = "dev-6qo4xw0ct2poxtul.us.auth0.com";
const clientId = "DJy8ClwmtkaSFS9qqW5nc1O5rOuLuYjh";






axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
      <Provider store={store}>
        <BrowserRouter>
        <Auth0Provider
        domain={domain} 
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        >
          <App />
        </Auth0Provider>
        </BrowserRouter>
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
