import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginSuccess() {
  const history = useHistory();

  const handleGoHome = () => {
    history.push('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login Successful</h1>
      <p>Welcome to the application!</p>
      <button onClick={handleGoHome} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Go to Home
      </button>
    </div>
  );
}

export default LoginSuccess;
