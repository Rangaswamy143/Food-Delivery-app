import React, { useContext, useEffect, useState } from "react";
import "./placeorder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  // console.log(data)

  const PlaceOrderSubmit = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    // console.log(orderItems);

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    console.log(response);
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  // when user can logout or cart item is 0 , then he can't see this page until he login , logic :-
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);
  //

  const onChangeHandler = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  return (
    <form className="place-order" onSubmit={PlaceOrderSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            value={data.firstName}
            name="firstName"
            onChange={onChangeHandler}
            placeholder="First name"
            required
            id=""
          />
          <input
            type="text"
            value={data.lastName}
            name="lastName"
            onChange={onChangeHandler}
            placeholder="Last name"
            required
            id=""
          />
        </div>
        <input
          type="email"
          value={data.email}
          name="email"
          onChange={onChangeHandler}
          placeholder="Email address"
          required
          id=""
        />
        <input
          type="text"
          onChange={onChangeHandler}
          value={data.street}
          name="street"
          placeholder="Street"
          required
          id=""
        />
        <div className="multi-fields">
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.city}
            name="city"
            placeholder="City"
            required
            id=""
          />
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.state}
            name="state"
            placeholder="State"
            required
            id=""
          />
        </div>
        <div className="multi-fields">
          <input
            type="number"
            value={data.zipcode}
            name="zipcode"
            onChange={onChangeHandler}
            placeholder="Zip code"
            required
            id=""
          />
          <input
            type="text"
            value={data.country}
            name="country"
            onChange={onChangeHandler}
            placeholder="Country"
            required
            id=""
          />
        </div>
        <input
          type="phone"
          onChange={onChangeHandler}
          value={data.phone}
          name="phone"
          placeholder="Phone"
          required
          id=""
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
