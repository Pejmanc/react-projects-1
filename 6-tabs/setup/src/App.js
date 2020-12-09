import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setCompanies(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section-loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = companies[value];
  return (
    <section>
      <article>
        <h1>experience</h1>
        <div className="underline"></div>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        {duties.map((duty, index) => (
          <p>{duty}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
