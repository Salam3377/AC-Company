import './App.css';
import Header from './Components/header'
import HomePage from './Components/homePage';
import NavLinks from './Components/navLinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPage from './Components/footer';


function App() {
  return (
    <div>
      < NavLinks />
      < Header />
      < HomePage />
      < FooterPage />
    </div>
  );
}

export default App;
