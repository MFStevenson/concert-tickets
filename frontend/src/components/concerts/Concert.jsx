import React from "react";
import { Link } from "react-router-dom";

const Concert = ({ concert }) => {
  const formattedDate = new Date(concert.date).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="Concert">
      <h3 className="concert-title">
        <Link to={`/concerts/${concert.id}`}>{concert.name}</Link>
      </h3>
      <p className="concert-info">
        <label className="concert-location">Location: {concert.location}</label>
        <label className="concert-date">Date: {formattedDate}</label>
        <label className="concert-start-time">
          Start Time: {concert.startTime}
        </label>
        <label className="concert-end-time">End Time: {concert.endTime}</label>
        <label className="concert-price">Price: {concert.price}</label>
      </p>
      <img
        className="concert-image"
        src={concert.imageUrl}
        alt="Concert Image"
      />
    </div>
  );
};

export default Concert;
