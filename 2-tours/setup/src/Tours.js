import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} />
      ))}
    </div>
  );
};

export default Tours;

// import React from "react";
// import Tour from "./Tour";

// const Tours = ({ tours, removeTour }) => {
//   return (
//     <>
//       {tours.map((tour) => (
//         <Tour key={tour.id} {...tour} removeTour={removeTour} />
//       ))}
//     </>
//   );
// };

// export default Tours;
