import './App.css';
import Header from './Components/header'
import HomePage from './Components/homePage';
import Heating from './Components/heating'
import Ventilation from './Components/ventilation'
import AC from './Components/airConditioning'
import ContactUs from './Components/contact'

import NavLinks from './Components/navLinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPage from './Components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      < NavLinks />
      < Header />
      {/* < HomePage /> */}
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/heating" element={< Heating />} />
        <Route path="/ventilation" element={< Ventilation />} />
        <Route path="/ac" element={< AC />} />
        <Route path="/contact" element={< ContactUs />} />
      </Routes>
      < FooterPage />
    </BrowserRouter>
  );
}

export default App;
