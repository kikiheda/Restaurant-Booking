// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Menu.scss";

// const Menu = () => {
//   const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/menu")
//       .then((response) => {
//         setMenu(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching menu:", error);
//       });
//   }, []);

//   const renderMenuItems = (category) => {
//     return menu
//       .filter((item) => item.category === category)
//       .map((item) => (
//         <div key={item.id} className="menu-__item">
//           <h3 className="menu__item-name">{item.item_name}</h3>
//           <p className="menu__item-description">{item.description}</p>
//           <p className="menu__item-price">${item.price.toFixed(2)}</p>
//         </div>
//       ));
//   };

//   return (
//     <div className="menu">
//       <h1 className="menu__title">Dinner Menu</h1>

//       <section className="menu__section">
//         <h2 className="menu__section-title">Starters</h2>
//         {renderMenuItems("starter")}
//       </section>

//       <section className="menu__section">
//         <h2 className="menu__section-title">Mains</h2>
//         {renderMenuItems("main")}
//       </section>

//       <section className="menu__section">
//         <h2 className="menu__section-title">Desserts</h2>
//         {renderMenuItems("dessert")}
//       </section>
//     </div>
//   );
// };

// export default Menu;
