import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './My Components/Navbar';
import Home from './My Components/Home';
import Footer from './My Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import MensWear from './My Components/MensWear';
import WomenWear from './My Components/WomenWear';
import CartPage from './My Components/CartPage';
import Login from './My Components/Login';

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mens" element={<MensWear />} />
          <Route path="/womens" element={<WomenWear />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
