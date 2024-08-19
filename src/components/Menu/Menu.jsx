import React from "react";
import menuData from "../../data/menu.json";
import "./Menu.scss";
 

const Menu = () => {
  const renderMenuItems = (category) => {
    return menuData.dinner_menu
      .filter((item) => item.category === category)
      .map((item, index) => (
        <div key={index} className="menu__item">
          <h3 className="menu__item-name">{item.item_name}</h3>
          <p className="menu__item-description">{item.description}</p>
          <p className="menu__item-price">${item.price.toFixed(2)}</p>
        </div>
      ));
  };

  return (
    <div className="menu">
      <h1 className="menu__title">Dinner Menu</h1>
      <div className="menu__category">
        <h2 className="menu__category-title">Starters</h2>
        {renderMenuItems("Starter")}
      </div>
      <div className="menu__category">
        <h2 className="menu__category-title">Mains</h2>
        {renderMenuItems("Main")}
      </div>
      <div className="menu__category">
        <h2 className="menu__category-title">Desserts</h2>
        {renderMenuItems("Dessert")}
      </div>
    </div>
  );
};

export default Menu;
