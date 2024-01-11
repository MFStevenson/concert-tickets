import QR from "./QRcode";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
    <div>
      <h2> Ticket </h2>
      <p>Ticket no.: {ticket_id} </p>
      <p>Show: {ticketDetails.name}</p>
      <p>Date: {ticketDetails.date}</p>
      <p>Time: {ticketDetails.startTime}</p>
      <p>City: {ticketDetails.location}</p>
      <QR text={ticketDetails.qr} />
      <button onClick={handleClick}>Transfer</button>
    </div>
  );
};
export default SingleTicket;
