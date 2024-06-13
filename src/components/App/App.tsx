import Home from '../Home';
import Menu from '../Menu';
// import Recipe from '../Recipe';
// import Error from '../Error';

import Loading from './Loading';
import './App.scss';

function App() {
  const loading = false; //TODO gerer le loading quand on ira fetch les données
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Home />
      {/* <Recipe /> */}
      {/* <Error /> */}
    </div>
  );
}

export default App;
