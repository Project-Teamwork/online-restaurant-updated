import Navbar from './Components/Navbar.js';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import OrdersScreen from './Screens/OrdersScreen.js';
import RegisterScreen from './Screens/RegisterScreen.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
