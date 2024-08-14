import React from "react";
import "./exploremenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  console.log(category);
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingridients and culinary expertise. our mission
        is to satisfy your craving and elevate your dinning experience , one
        delicius meal at a time
      </p>
      <div className="explore-menu-list">
        {menu_list.map((eachMenuItem, index) => {
          const { menu_image, menu_name } = eachMenuItem;
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === menu_name ? "All" : menu_name))
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === menu_name ? "active" : ""}
                src={menu_image}
                alt=""
              />
              <p>{menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
