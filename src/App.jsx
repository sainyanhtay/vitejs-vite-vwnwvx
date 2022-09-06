import { useLocalStorage } from 'usehooks-ts';
import Challenge from './components/challenge';
import Instructions from './components/instructions';
import Layout from './components/layout';

function App() {
  const [showIns, setShowIns] = useLocalStorage('sic-show-instructions', true);

  return (
    <Layout showIns={showIns} setShowIns={setShowIns}>
      {showIns ? <Instructions /> : <Challenge />}
    </Layout>
  );
}

export default App;
