import React from 'react';
import { useLocation } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';

const LoginPage = () => {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div>
      {message && <p>{message}</p>}
      <GoogleLoginButton />
    </div>
  );
};

export default LoginPage;
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import GoogleLoginButton from './GoogleLoginButton';

// const LoginPage = () => {
//   const location = useLocation();
//   const message = location.state?.message;

//   return (
//     <div>
//       {message && <p>{message}</p>}
//       <GoogleLoginButton />
//     </div>
//   );
// };

// export default LoginPage;
