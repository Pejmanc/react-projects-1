import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [allItems, setAllItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setAllItems(items);
      return;
    }
    const filteredItems = items.filter((item) => item.category === category);
    setAllItems(filteredItems);
  };
  return (
    <main>
      <section className="menu">
        <h2 className="title">Our Menu</h2>
        <div className="underline"></div>
        <Categories filterItems={filterItems} />
        {allItems.map((item) => (
          <Menu key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
