import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function UnprotectedRoute({ component: Component }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <Navigate to="/explore" /> : <Component />;

  // for testing without authentication
  // return <Component />;
}

export default UnprotectedRoute;
