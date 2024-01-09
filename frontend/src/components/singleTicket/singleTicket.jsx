import QR from "./QRcode";
import { useNavigate, useParams } from "react-router-dom";

const SingleTicket = () => {
  const { ticket_id } = useParams();

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/ticket/${ticket_id}/transfer`);
  }

  return (
    <div>
      <h2> Ticket </h2>
      <p>Ticket no.: {ticket_id} </p>
      <p>Show: </p>
      <p>Time: </p>
      <p>Venue: </p>
      <QR text="testing" />

      <button onClick={handleClick}>Transfer</button>
    </div>
  );
};
export default SingleTicket;
