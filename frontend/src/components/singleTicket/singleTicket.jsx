import QR from "./QRcode";
import { useNavigate, useParams } from "react-router-dom";
import "../../styling/SingleTicket.css"
const SingleTicket = () => {
  const { ticket_id } = useParams();

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/ticket/${ticket_id}/transfer`);
  }

  return (
    <div className = "single-ticket-area">
      <h2> Ticket </h2>
      <section className ="single-ticket-content">
      <p>Ticket no.: {ticket_id} </p>
      <p>Show: </p>
      <p>Time: </p>
      <p>Venue: </p>
      <QR text="testing" />
      
      <button className = "single-ticket-button" onClick={handleClick}>Transfer</button>
      </section>
    </div>
  );
};
export default SingleTicket;
