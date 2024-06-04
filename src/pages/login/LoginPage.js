import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function LoginPage() {
    const handleSuccess = async (response) => {
        const token = response.credential;
        // 백엔드로 토큰을 보냅니다.
        const result = await fetch('http://localhost:8080/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });
    
        if (result.ok) {
          window.location.href = '/loginSuccess';
        } else {
          window.location.href = '/loginFailure';
        }
      };
    
      const handleFailure = (error) => {
        console.log('Login Failed:', error);
        window.location.href = '/loginFailure';
      };
    
      return (
        <GoogleOAuthProvider clientId="215817117464-turiuhukkats33p3oa60sbd3bmmqb5u0.apps.googleusercontent.com">
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

export default LoginPage;
