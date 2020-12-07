import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      if (index >= people.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      if (index === 0) {
        return people.length - 1;
      }
      return index - 1;
    });
  };
  return (
    <div>
      <div className="review">
        {
          <div>
            <div className="img-container">
              <img className="person-img" src={image} alt={name} />
            </div>
            <div>
              <h4>{name}</h4>
              <h5>{job}</h5>
              <p>{text}</p>
            </div>
          </div>
        }
      </div>
      <button onClick={nextPerson}>next</button>
      <button onClick={prevPerson}>prev</button>
    </div>
  );
};

export default Review;
