import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginFailure() {
  const history = useHistory();

  const handleTryAgain = () => {
    history.push('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login Failed</h1>
      <p>Something went wrong. Please try again.</p>
      <button onClick={handleTryAgain} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Try Again
      </button>
    </div>
  );
}

export default LoginFailure;
