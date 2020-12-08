import React from "react";

const Categories = () => {
  return (
    <article>
      <div>Categories</div>
    </article>
  );
};

export default Categories;

// import React from "react";
// import Menu from "./Menu";
// const Categories = ({ filterCategoties }) => {
//   return (
//     <button onClick={() => filterCategoties("breakfast")}>Breakfast</button>
//   );
// };

// export default Categories;

// import React from "react";

// const Categories = ({ filterItems, categories }) => {
//   return (
//     <article className="btn-container">
//       {
//         <>
//           {
//             <button
//               className="filter-btn"
//               onClick={() => filterItems("breakfast")}
//             >
//               Breakfast
//             </button>
//           }

//           {/* {categories.map((category, index) => (
//             <button
//               key={index}
//               className="filter-btn"
//               onClick={() => filterItems(category)}
//             >
//               {category}
//             </button>
//           ))} */}
//         </>
//       }
//     </article>
//   );
// };

// export default Categories;
