import React, { useContext, useEffect, useState } from "react";
import "./loginpopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import eye from "../../assets/eye.svg";
import Loding from "../loading/Loding";

const LoginPopUp = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [Vissible, setVissible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setShowLogin, url, setToken ,} = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let newUrl = url;

      if (currState === "Login") {
        newUrl += "/api/user/login";
      } else {
        newUrl += "/api/user/register";
      }
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        toast.success(
          currState === "Login"
            ? "Successfully Login"
            : "Successfully Register "
        );
      } else {
        toast.error(response.data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="login-popup">
      <form onSubmit={submitHandler} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            ""
          ) : (
            <input
              onChange={handleChange}
              type="text"
              placeholder="your name"
              value={data.name}
              name="name"
              id=""
              required
            />
          )}
          <input
            onChange={handleChange}
            type="email"
            placeholder="your email"
            value={data.emali}
            name="email"
            id=""
            required
          />
          <div className="password-section">
            <input
              onChange={handleChange}
              type={Vissible ? "text" : "password"}
              placeholder="password"
              value={data.password}
              name="password"
              id=""
              required
            />
            <img onClick={() => setVissible(!Vissible)} src={eye} alt="" />
          </div>
          <button type="submit">
            {currState === "Sign Up" ? "Create account" : "Login"}
            {loading && <Loding />}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the term of use & privacy policy.</p>
          </div>
          {currState === "Login" ? (
            <p onClick={() => setCurrState("Sign Up")}>
              Create a new account? <span>Click here</span>
            </p>
          ) : (
            <p onClick={() => setCurrState("Login")}>
              Already you have on account <span>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
