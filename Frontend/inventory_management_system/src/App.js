import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct'
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
    <div className="App">
      <Navbar title="Shopoholic" about="About"></Navbar>

      <Router>
        <Routes>
          {/* Default route now points to SignIn */}
          <Route exact path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
     <Footer/>

    </div>
  );
}

export default App;
