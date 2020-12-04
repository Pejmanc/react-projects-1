import React, { useState } from "react";

const Tour = ({ id, info, name, image, price }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <div>
      <img src={image} alt={name} />
      <h4>title</h4>
      <div>
        <p>
          {readmore ? `${info}` : `${info.substring(0, 150)}...`}
          <button className="btn" onClick={() => setReadmore(!readmore)}>
            {readmore ? "show less" : "read more"}
          </button>
        </p>
        <p>{price}</p>
      </div>
      <button onClick={deleteTour(id)}>Not intersted</button>
    </div>
  );
};

export default Tour;

// import React, { useState } from "react";

// const Tour = ({ id, name, image, info, price, removeTour }) => {
//   const [readmore, setReadmore] = useState(false);
//   return (
//     <main>
//       <section className="single-tour">
//         <h3 className="title">{name}</h3>
//         <img className="single-tour img" src={image} alt={id} />
//         <p>
//           {readmore ? `${info}` : `${info.substring(0, 150)}...`}{" "}
//           <button onClick={() => setReadmore(!readmore)}>
//             {readmore ? "show less" : "read more"}
//           </button>
//         </p>
//         <p className="tour-price">{price} $</p>
//         <button onClick={() => removeTour(id)}>Delete this Tour</button>
//       </section>
//     </main>
//   );
// };

// export default Tour;
