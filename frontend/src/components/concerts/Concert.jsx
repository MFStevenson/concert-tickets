import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const Concert = ({ concertDetails }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>{concertDetails.name}</h2>
      <p className="concert-date">
        {" "}
        Date: {concertDetails.dates.start.localDate}
      </p>
      <p> Start Time: {concertDetails.dates.start.localTime}</p>
      <p> City: {concertDetails._embedded.venues[0].city.name}</p>
      <img
        className="concert-image"
        src={concertDetails.images[0].url}
        alt={`${concertDetails.name} image`}
      />

      {Object.keys(user).length ? (
        <Link to={`/concerts/${concertDetails.id}/buy`}>Buy Ticket</Link>
      ) : null}
    </>
  );
};

export default Concert;
