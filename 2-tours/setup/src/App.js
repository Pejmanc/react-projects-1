import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import axios from "axios";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetcheddata();
  }, []);

  const fetcheddata = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        const allTours = res.data;
        setTours(allTours);
      })
      .catch((err) => console.error(err));
  };

  const clickHandler = () => {
    setTours([]);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Tours tours={tours} />
      <button className="single-tour" onClick={clickHandler}>
        Delete Tours
      </button>
      <button onClick={fetcheddata}>Set Tours Again</button>
    </main>
  );
};

export default App;
