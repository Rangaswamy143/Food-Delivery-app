import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import PlaceOrder from "./pages/placeorder/PlaceOrder";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import { useContext, useState } from "react";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";
import { StoreContext } from "./context/StoreContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Verify from "./components/verify/Verify";
import MyOrders from "./pages/myorders/MyOrders";


function App() {
  const { showLogin } = useContext(StoreContext);
  // const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    <ToastContainer position="top-center" />
      {showLogin ? <LoginPopUp /> : ""}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<PlaceOrder />} />
          <Route path="verify" element={<Verify/>}/>
          <Route path="myorders" element={<MyOrders/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
