import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { postGoogleLogin } from './postGoogleLogin';
import { useAuth } from '../../auth/AuthContext';
import useScript from '../../hooks/useScript';
import { useLocation} from 'react-router-dom';
import './Login.css';

function GoogleLoginButton() {
  useScript('https://accounts.google.com/gsi/client', () => {
    console.log('Google script loaded');
  });
  const location = useLocation();
  const { login } = useAuth();

  const handleSuccess = async (response) => {
    const token = response.credential;
    try {
      const serverResponse = await postGoogleLogin(token);
      localStorage.setItem('token', serverResponse.token);  // Save the JWT token to local storage
      const redirectUrl = new URLSearchParams(location.search).get('redirectUrl') || '/';
      login(serverResponse.token);  // 로그인 상태 업데이트
      window.location.href = redirectUrl;

    } catch (error) {
      window.location.href = '/loginFailure';
    }
  };

  const handleFailure = (error) => {
    console.log('Login Failed:', error);
    window.location.href = '/loginFailure';
  };

  return (
    <div className='google-login-page'>
      <div className='login-box'>

      
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Google 계정으로 로그인</h1>
          <div className='google-login-button'>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleFailure}
          />
          </div>
        </div>
        
      </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default GoogleLoginButton;
