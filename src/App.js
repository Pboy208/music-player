import Layout from 'components/Layout';
import GlobalStyle from 'components/common/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle theme="dark" />
      <Layout>
        <div>Music player app</div>
      </Layout>
    </>
  );
}

export default App;
