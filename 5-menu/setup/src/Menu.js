import React from "react";

const Menu = ({ title, price, img, desc }) => {
  const filterItems = (category) => {
    const filteredItems = items.filter((item) => item.category === category);
    setAllItems(filteredItems);
  };
  return (
    <article className="menu">
      <Categories filterItems={filterItems} />
      <div className="menu-item">
        <img className="photo" src={img} alt={title} />
        <div>
          <div className="item-info">
            <header className="title ">{title}</header>
            <h4 className="price">${price}</h4>
          </div>
          <p className="item-text">{desc}</p>
        </div>
      </div>
    </article>
  );
};

export default Menu;

// import React, { useState } from "react";
// import Categories from "./Categories";
// import menu from "./data";
// const Menu = () => {
//   const [items, setItems] = useState(menu);
//   const filterCategories = (category) => {
//     const filteredCategories = menu.filter(
//       (itemm) => itemm.category === category
//     );
//     setItems(filteredCategories);
//   };

//   return (
//     <div>
//       <Categories filterCategories={filterCategories} />
//       <article className="menu">
//         {items.map((item) => (
//           <div className="menu-item" key={item.id}>
//             <img className="photo" src={item.img} alt={item.title} />
//             <div>
//               <div className="item-info">
//                 <header className="title ">{item.title}</header>
//                 <h4 className="price">${item.price}</h4>
//               </div>
//               <p className="item-text">{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </article>
//     </div>
//   );
// };

// export default Menu;

// import React from "react";

// const Menu = ({ title, price, img, desc }) => {
//   return (
//     <article className="menu-item">
//       <img className="photo" src={img} alt={title} />
//       <div>
//         <header>
//           <h4 className="item-info">{title}</h4>
//           <h6 className="price">{price}</h6>
//         </header>
//         <p className="menu-item">{desc}</p>
//       </div>
//     </article>
//   );
// };

// export default Menu;
