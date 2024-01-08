import React from "react";
import { Link } from "react-router-dom";

const Concert = ({ concert }) => {
  

  return (
    <div className="Concert">
      <h2>{concert.name}</h2>
      {/* <p className="concert-location">Location: {concert.location}</p>
      <p className="concert-date"> Date: {concert.dates.start.localDate}</p> */}

      <img
        className="concert-image"
        src={concert.imageUrl}
        alt={`${concert.name} image`}
      />
    </div>
  );
};

export default Concert;
