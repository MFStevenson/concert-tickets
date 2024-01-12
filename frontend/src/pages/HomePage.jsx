import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConcerts } from "../utils/api";
import Loading from "../components/Loading";
import "../styling/HomePage.css";
const HomePage = () => {
  const [concerts, setConcerts] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getConcerts()
      .then((res) => {
        const allConcerts = res.data._embedded.events;
        setConcerts(allConcerts);
        setFilteredConcerts(allConcerts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching concerts:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Update filteredConcerts based on the search term
    const searchedConcerts = concerts.filter((concert) =>
      concert.name.toLowerCase().includes(searchTerm)
    );
    setFilteredConcerts(searchedConcerts);
  };

  if (isLoading) {
    return (
      <>
        {" "}
        <Loading />{" "}
      </>
    );
  }

  return (
    <div className="homepage">
      <div className="home-area">
        <h2>Concerts</h2>
        <section className="home-content">
          <input
            className="search-bar"
            type="text"
            placeholder="Search concerts..."
            value={searchTerm}
            onChange={handleSearch}
          />

          <button className="search-button" onClick={handleSearch}>
            {" "}
            Clear{" "}
          </button>

          <div className="concert-grid">
            <ul>
              {filteredConcerts.map((concert) => (
                <li key={concert.id} className="concert-list">
                  <Link className="concert-link" to={`/concerts/${concert.id}`}>
                    <p className="concert-block">{concert.name} </p>
                    <img
                      src={concert.images[0].url}
                      alt={`${concert.name} image`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
