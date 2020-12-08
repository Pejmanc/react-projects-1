import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";
const App = () => {
  const [allItems, setAllItems] = useState(items);

  const filterItems = (category) => {
    const filteredItems = items.filter((item) => item.category === category);
    setAllItems(filteredItems);
  };

  return (
    <main>
      <article>
        <h1>Our Menu</h1>
        <div className="underline"></div>
        <Categories filterItems={filterItems} />
        {allItems.map((item) => (
          <Menu key={item.id} {...item} />
        ))}
      </article>
    </main>
  );
};

export default App;

// import React from "react";
// import Categories from "./Categories";
// import Menu from "./Menu";

// const App = () => {
//   return (
//     <main>
//       <section>
//         <h1>Our Project</h1>
//         <div className="underline"></div>
//         <Menu />
//       </section>
//     </main>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import Menu from "./Menu";
// import Categories from "./Categories";
// import items from "./data";

// // const uniqueCategories = [
// //   "all",
// //   ...new Set(items.map((item) => item.category)),
// // ];

// function App() {
//   const [allItems, setAllItems] = useState(items);
//   // const [categories, setCategories] = useState(uniqueCategories);categories={categories}

//   const filterItems = (category) => {
//     if (category === "all") {
//       setAllItems(items);
//       return;
//     }
//     const filteredItems = items.filter((item) => item.category === category);
//     setAllItems(filteredItems);
//   };
//   return (
//     <main>
//       <section className="menu">
//         <h2 className="title">Our Menu</h2>
//         <div className="underline"></div>
//         <Categories filterItems={filterItems} />

//         {allItems.map((item) => (
//           <Menu key={item.id} {...item} />
//         ))}
//       </section>
//     </main>
//   );
// }

// export default App;
