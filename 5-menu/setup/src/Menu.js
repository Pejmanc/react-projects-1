import React from "react";

const Menu = ({ title, category, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img className="photo" src={img} alt={title} />
      <div>
        <header>
          <h4 className="item-info">{title}</h4>
          <h6 className="price">{price}</h6>
        </header>
        <p className="menu-item">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;
