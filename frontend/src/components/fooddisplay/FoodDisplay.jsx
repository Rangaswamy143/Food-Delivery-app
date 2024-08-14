import React, { useContext } from "react";
import "./fooddisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../fooditem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          const { _id, name, description, price, image } = item;
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={_id}
                name={name}
                description={description}
                price={price}
                image={image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
