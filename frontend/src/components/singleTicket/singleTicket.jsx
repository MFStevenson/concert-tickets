import QR from "./QRcode";
import { useNavigate, useParams } from "react-router-dom";

const SingleTicket = () => {
  let { ticket_id } = useParams();
  //temp assign till backend connected change to const
  ticket_id = 1;
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
