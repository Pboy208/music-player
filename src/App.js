import Layout from 'components/Layout';
import Login from 'components/Auth/Login';
import Register from 'components/Auth/Register';
import GlobalStyle from 'components/common/GlobalStyle';
import Personal from 'screens/Personal';

function App() {
  return (
    <>
      {/* <GlobalStyle theme="dark" /> */}
      {/* <Login /> */}
      <Register />
      {/* <Layout>
        <Personal />
      </Layout> */}
    </>
  );
}

export default App;
