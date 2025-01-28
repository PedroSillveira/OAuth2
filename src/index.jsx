import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { GoogleOAuthProvider } from '@react-oauth/google'

const clientID = "870790716772-mvaj8943f3h06543c7q2ugberf5ansf6.apps.googleusercontent.com"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <App />
    </GoogleOAuthProvider>
      
  </React.StrictMode>
);

