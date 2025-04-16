import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import TrackOrder from "./pages/TrackOrder";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/track-order" element={<TrackOrder />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
};

export default App;
