import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Layout from 'components/Layout';

function ProtectedRoute({ component: Component }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );

// for testing without authentication
//   return (
//     <Layout>
//       <Component />
//     </Layout>
//   );
}

export default ProtectedRoute;
