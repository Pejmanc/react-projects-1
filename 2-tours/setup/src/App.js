import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import axios from "axios";
import Loading from "./Loading";

const App = () => {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchedData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setTours(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchedData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Tours tours={tours} />
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import Tours from "./Tours";
// import Loading from "./Loading";
// import axios from "axios";

// const App = () => {
//   const [tours, setTours] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const url = "https://course-api.com/react-tours-project";

//   useEffect(() => {
//     fetchedData();
//   }, []);

//   const fetchedData = () => {
//     setLoading(true);
//     axios
//       .get(url)
//       .then((res) => {
//         setLoading(false);
//         const allTours = res.data;
//         setTours(allTours);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const removeTour = (id) => {
//     const newTours = tours.filter((tour) => tour.id !== id);
//     setTours(newTours);
//   };
//   const clickHandler = () => {
//     setTours([]);
//   };
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <main>
//       <Tours tours={tours} removeTour={removeTour} />
//       <button onClick={clickHandler}>Delete All Tours</button>
//     </main>
//   );
// };

// export default App;

// // import React, { useState, useEffect } from "react";
// // import Loading from "./Loading";
// // import Tours from "./Tours";
// // import axios from "axios";

// // const url = "https://course-api.com/react-tours-project";

// // const App = () => {
// //   const [tours, setTours] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     fetcheddata();
// //   }, []);

// //   const fetcheddata = () => {
// //     setLoading(true);
// //     axios
// //       .get(url)
// //       .then((res) => {
// //         setLoading(false);
// //         const allTours = res.data;
// //         setTours(allTours);
// //       })
// //       .catch((err) => console.error(err));
// //   };

// //   const clickHandler = () => {
// //     setTours([]);
// //   };

// //   if (loading) {
// //     return <Loading />;
// //   }
// //   return (
// //     <main>
// //       <Tours tours={tours} />
// //       <button className="single-tour" onClick={clickHandler}>
// //         Delete Tours
// //       </button>
// //       <button onClick={fetcheddata}>Set Tours Again</button>
// //     </main>
// //   );
// // };

// // export default App;
