import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConcerts } from "../utils/api";
import Loading from "../components/Loading";
import "../styling/HomePage.css";

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
      concert.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setConcerts(searchedConcerts);
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
            Search{" "}
          </button>

          <div className="concert-grid">
            <ul>
              {concerts.map((concert, index) => (
                <li key={concert.id} className="concert-list">
                  <Link className="concert-link" to={`/concerts/${concert.id}`}>
                    <p className="concert-block">{concert.name} </p>
                    <img
                      src={concerts[index].images[0].url}
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
