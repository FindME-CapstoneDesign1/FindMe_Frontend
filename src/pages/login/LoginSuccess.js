import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function LoginSuccess() {
  const history = useHistory();
  const location = useLocation();
  const redirectUrl = new URLSearchParams(location.search).get('redirectUrl') || '/';

  const handleGoBack = () => {
    history.push(redirectUrl);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login 성공</h1>
      <p>FindME에 오신 것을 환영합니다.</p>
      <button onClick={handleGoBack} style={{ padding: '10px 20px', fontSize: '16px' }}>
        메인 페이지로 돌아가기
      </button>
    </div>
  );
}

export default LoginSuccess;
