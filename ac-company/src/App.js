import './App.css';
import HomePage from './Components/homePage';
import NavLinks from './Components/navLinks';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      < NavLinks />
      < HomePage />
    </div>
  );
}

export default App;
