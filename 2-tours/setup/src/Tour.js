import React from "react";

const Tour = (tour) => {
  return (
    <main>
      <section className="single-tour">
        <h3 className="title">{tour.name}</h3>
        <img className="single-tour img" src={tour.image} alt={tour.id} />
        <h4 className="tour-info">{tour.info}</h4>
        <p className="tour-price">{tour.price} $</p>
      </section>
    </main>
  );
};

export default Tour;
