import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2> Order Your Favourite Food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingridients and culinary expertise. our
          mission is to satisfy your craving and elevate your dinning experience
          , one delicius meal at a time
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
