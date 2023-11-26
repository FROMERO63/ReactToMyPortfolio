// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
