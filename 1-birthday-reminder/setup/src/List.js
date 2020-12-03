import React, { useState } from "react";
import data from "./data";
import EraseButton from "./EraseButton";
import Header from "./Header";

const List = () => {
  const [people, setpeople] = useState(data);
  return (
    <>
      <section className="container">
        <main>
          <Header length={people.length} />
          {people.map((person) => (
            <article className="person" key={person.id}>
              <img className="img" src={person.image} alt={person.name} />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
              </div>
            </article>
          ))}
          <EraseButton setpeople={setpeople} />
        </main>
      </section>
    </>
  );
};

export default List;
