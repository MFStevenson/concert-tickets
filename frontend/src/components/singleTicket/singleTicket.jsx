import QR from "./QRcode";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../../styling/SingleTicket.css";

const SingleTicket = ({ ticketDetails }) => {
  const { ticket_id } = useParams();

  if (!ticketDetails) {
    const location = useLocation();
    ticketDetails = location.state;
  }
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/ticket/${ticket_id}/transfer`);
  }

  return (
    <div className="single-ticket-area">
      <h2> Ticket </h2>
      <section className="single-ticket-content">
        <p>Ticket no.: {ticket_id} </p>
        <p>Show: {ticketDetails.name}</p>
        <p>Date: {ticketDetails.date}</p>
        <p>Time: {ticketDetails.startTime}</p>
        <p>City: {ticketDetails.location}</p>
        <QR text={ticketDetails.qr} />

        <button className="single-ticket-button" onClick={handleClick}>
          Transfer
        </button>
      </section>
    </div>
  );
};
export default SingleTicket;
