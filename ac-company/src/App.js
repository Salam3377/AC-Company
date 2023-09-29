import './App.css';
import Header from './Components/header'
import HomePage from './Components/homePage';
import NavLinks from './Components/navLinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPage from './Components/footer';
import AboutUs from './Components/aboutUs';

function App() {
  return (
    <div>
      < NavLinks />
      < Header />
      < HomePage />
      < AboutUs />
      < FooterPage />
    </div>
  );
}

export default App;
