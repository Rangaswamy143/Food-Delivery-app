import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Order from "./pages/order/Order";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const baseURL = "http://localhost:4000";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add baseURL={baseURL} />} />
          <Route path="/list" element={<List baseURL={baseURL} />} />
          <Route path="/order" element={<Order baseURL={baseURL} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
