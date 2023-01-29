import "./App.css";
// import SideNavbar from "./Components/SideNavbar";
import Products from "./Screens/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
       {/* <SideNavbar/> */}
        <Routes>
          <Route path="/home" element={<Products />} />
          {/* <Route path="/cart" element={<CartScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/orders" element={<OrdersScreen />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
