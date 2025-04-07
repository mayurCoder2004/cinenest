import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
    </>
  );
}

export default App;