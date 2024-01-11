import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { buyTicket } from "../utils/api";
import "../styling/SuccessfulPage.css"
import cryptoRandomString from "crypto-random-string";

const BuySuccessfulPage = () => {
  const { user } = useContext(UserContext);
  const { ticketGenerated, setTicketGenerated } = useState(false);

  const location = useLocation();
  const concertDetails = location.state;

  const generateQrCode = () => {
    return cryptoRandomString({ length: 16 });
  };
  useEffect(() => {
    const postBody = {
      name: concertDetails.name,
      start_time: concertDetails.dates.start.localTime,
      date: concertDetails.dates.start.localDate,
      location: concertDetails._embedded.venues[0].city.name,
      price: concertDetails.priceRanges[0].min,
      email: user.email,
      transaction_type: "buy",
      qr: generateQrCode(),
      admit: 1,
      uid: user.uid,
    };
    buyTicket(postBody).then(() => {
      setTicketGenerated(true);
    });
  });
  return (
   <div className = "success-area">
      <h2>Your Purchase Was Successful</h2>
      <section className ="success-content"> 
      <p>Please wait for the ticket to be created </p>
      {ticketGenerated ? (
        <Link to={`/mytickets/${ticket_id}`}><button className = "button"> View Ticket </button></Link>
      ) : null}
      </section>
</div>
  );
};

export default BuySuccessfulPage;
