import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConcerts } from "../utils/api";

const HomePage = () => {
  const [concerts, setConcerts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getConcerts()
      .then((res) => {
        setConcerts(res.data._embedded.events);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching concerts:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchedConcerts = concerts.filter((concert) =>
      concert.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setConcerts(searchedConcerts);
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="HomePage">
      <h2>Home Page</h2>
      <input
        type="text"
        placeholder="Search concerts..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="ConcertList">
        <ul>
          {concerts.map((concert) => (
            <li key={concert.id} className="Concert">
              <h3>{concert.name}</h3>
              <Link to={`/concerts/${concert.id}`}>See More</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
