import Layout from 'components/Layout';
import Login from 'components/Login/Login';
import GlobalStyle from 'components/common/GlobalStyle';
import Personal from 'screens/Personal';

function App() {
  return (
    <>
      {/* <GlobalStyle theme="dark" /> */}
      <Login />
      {/* <Layout>
        <Personal />
      </Layout> */}
    </>
  );
}

export default App;