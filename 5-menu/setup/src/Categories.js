import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <article className="btn-container">
      {
        <>
          <button className="filter-btn" onClick={() => filterItems("all")}>
            {}
          </button>
        </>
      }
    </article>
  );
};

export default Categories;
