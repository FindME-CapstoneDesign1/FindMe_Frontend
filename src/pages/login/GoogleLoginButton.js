import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { postGoogleLogin } from './postGoogleLogin';
import { useAuth } from '../../auth/AuthContext';
import useScript from '../../hooks/useScript';

function GoogleLoginButton() {
  useScript('https://accounts.google.com/gsi/client', () => {
    console.log('Google script loaded');
  });

  const { login } = useAuth();

  const handleSuccess = async (response) => {
    const token = response.credential;
    try {
      const serverResponse = await postGoogleLogin(token);
      localStorage.setItem('token', serverResponse.token);  // Save the JWT token to local storage
      login(serverResponse.token);  // Update login state
      window.location.href = '/loginSuccess';
    } catch (error) {
      window.location.href = '/loginFailure';
    }
  };

  const handleFailure = (error) => {
    console.log('Login Failed:', error);
    window.location.href = '/loginFailure';
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Login with Google</h1>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
