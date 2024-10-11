import React from "react";
import Menu from "../../components/Menu/Menu";
import "./MenuPage.scss";

const MenuPage = () => {
  return (
    <div className="menuPage">
      <h1>Our Menu</h1>
      <p>Explore our delicious menu.</p>
      <Menu />
    </div>
  );
};

export default MenuPage;
