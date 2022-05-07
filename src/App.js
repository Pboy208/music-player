import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'components/Auth/Login';
import Register from 'components/Auth/Register';
import GlobalStyle from 'components/common/GlobalStyle';
import Personal from 'screens/Personal';
import ProtectedRoute from 'components/common/ProtectedRoute';
import UnprotectedRoute from 'components/common/UnprotectedRoute';

function App() {
  return (
    <>
      <GlobalStyle theme="light" />
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route
          path="/login"
          exact
          element={<UnprotectedRoute component={Login} />}
        />
        <Route
          path="/register"
          exact
          element={<UnprotectedRoute component={Register} />}
        />
        <Route
          path="/home"
          exact
          element={<ProtectedRoute component={Personal} />}
        />
      </Routes>
    </>
  );
}

export default App;
