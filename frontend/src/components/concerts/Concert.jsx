import React from "react";
import "../../styling/ConcertPage.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const Concert = ({ concertDetails }) => {
  const { user } = useContext(UserContext);
  return (
    
    <div className = "body">
      <section className = "concert-area"> 
      <div className = "concert-info-area"> 
      <h2 className = "concert-title">{concertDetails.name}</h2>
      <section className = "concert-content"> 
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
      </section>
      </div>
<div className = "button-area"> 
      {Object.keys(user).length ? (
        <button className = "button"> <Link className="link" to={`/concerts/${concertDetails.id}/buy`} state = {concertDetails}>Buy Ticket</Link> </button>
      ) : (
        <button className = "button"> <Link className = "link" to={`/login`}>Login to buy a ticket</Link> </button>
      )}
      </div>
  </section>
    </div>
  );
};

export default Concert;
