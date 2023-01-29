import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Screens/Products";
import Product from "./Screens/ProductSingle";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Products />} />
          <Route path="/create" element={<Product />} />
          {/* <Route exact path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/orders" element={<OrdersScreen />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
