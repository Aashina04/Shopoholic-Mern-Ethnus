import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct';
import UpdateProduct from './components/UpdateProduct';
import About from './components/About';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="Shopoholic" about="About" />
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
