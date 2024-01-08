import React from "react";
import Concert from "./Concert";

const ConcertList = ({ concerts }) => {
  return (
    <div className="ConcertList">
      {concerts.map((concert) => (
        <Concert key={concert.id} concert={concert} />
      ))}
    </div>
  );
};

export default ConcertList;
