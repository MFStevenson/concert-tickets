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
      <p> The concert starts at {concertDetails.dates.start.localTime}</p>
      <p> The city is {concertDetails._embedded.venues[0].city.name}</p>
      <p> The price of the ticket is £{concertDetails.priceRanges[0].min}</p>
      {/* //get rid of ticket with no price or price at 0 */}
      <img
        className="concert-image"
        src={concertDetails.images[0].url}
        alt={`${concertDetails.name} image`}
      />

      {Object.keys(user).length ? (
        <Link to={`/concerts/${concertDetails.id}/buy`}>Buy Ticket</Link>
      ) : (
        <Link to={`/login`}>Login to buy a ticket</Link>
      )}
    </>
  );
};

export default Concert;
