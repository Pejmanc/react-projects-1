import React from "react";

const Categories = ({ filterItems, category }) => {
  return (
    <article className="btn-container">
      {
        <>
          <button className="filter-btn" onClick={() => filterItems("all")}>
            {category}
          </button>
        </>
      }
    </article>
  );
};

export default Categories;
