import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import { useLocation } from 'react-router-dom';

const LoginPage = () => {
  const location = useLocation();
  const message = location.state?.message || '';

  return (
    <div>
      <h1>Login</h1>
      {message && <p>{message}</p>}
      <GoogleLoginButton />
    </div>
  );
};

export default LoginPage;
