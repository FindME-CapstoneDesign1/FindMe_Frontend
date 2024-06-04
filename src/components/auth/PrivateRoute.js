import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { message: "로그인이 필요합니다" } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
