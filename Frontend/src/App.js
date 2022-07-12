import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'components/Auth/Login';
import Register from 'components/Auth/Register';
import GlobalStyle from 'components/common/GlobalStyle';
import Favorite from 'screens/Favorite';
import ProtectedRoute from 'components/common/ProtectedRoute';
import UnprotectedRoute from 'components/common/UnprotectedRoute';
import Profile from 'screens/Profile';
import GetResetLink from 'components/Auth/GetResetLink';
import Chart from 'screens/Chart';
import Explore from 'screens/Explore';
import ExploreSong from 'screens/Explore/ExploreSong';
import ResetPassword from 'components/Auth/ResetPassword';
import { ToastContainer } from '@ahaui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';
import { initializeSongState } from 'store/songSlice';

function Mock() {
  return <div>Mock</div>;
}

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useLayoutEffect(() => {
    if (user?.userID) dispatch(initializeSongState(user.userID));
  }, [user]);

  return (
    <>
      <ToastContainer />
      <GlobalStyle theme="light" />
      <Routes>
        <Route path="/" exact element={<Navigate to="/explore" />} />
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
          path="/forgot"
          exact
          element={<UnprotectedRoute component={GetResetLink} />}
        />
        <Route
          path="/reset-password/:resetToken"
          element={<UnprotectedRoute component={ResetPassword} />}
        />
        <Route
          path="/profile/:userId"
          exact
          element={<ProtectedRoute component={Profile} />}
        />
        <Route
          path="/favorite"
          exact
          element={<ProtectedRoute component={Favorite} />}
        />
        <Route
          path="/explore"
          exact
          element={<ProtectedRoute component={Explore} />}
        />
        <Route
          path="/explore/song"
          exact
          element={<ProtectedRoute component={ExploreSong} />}
        />
        <Route
          path="/chart"
          exact
          element={<ProtectedRoute component={Chart} />}
        />
        <Route
          path="/release"
          exact
          element={<ProtectedRoute component={Mock} />}
        />
      </Routes>
    </>
  );
}

export default App;
