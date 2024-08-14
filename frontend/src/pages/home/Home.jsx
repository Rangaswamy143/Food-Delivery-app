import React, { useState } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import ExploreMenu from "../../components/exploremenu/ExploreMenu";
import FoodDisplay from "../../components/fooddisplay/FoodDisplay";
import AppDownload from "../../components/appDownload/AppDownload";
import ContactUs from "../../components/ContactForm/ContactUs";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="home">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
      <ContactUs/>
    </div>
  );
};

export default Home;
