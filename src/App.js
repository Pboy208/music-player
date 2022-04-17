import Layout from 'components/Layout';
import GlobalStyle from 'components/common/GlobalStyle';
import Personal from 'screens/Personal';

function App() {
  return (
    <>
      <GlobalStyle theme="dark" />
      <Layout>
        <Personal />
      </Layout>
    </>
  );
}

export default App;