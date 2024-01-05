import QR from "./QRcode";
import { useNavigate } from "react-router-dom";


const SingleTicket = () => {
const ticketNumber = 1; 
const navigate = useNavigate();
function handleClick() {
  navigate(`/ticket/${ticketNumber}/transfer`);
}


return (
    <div> 
    <h2> Ticket </h2>
    <p>Ticket no.: {ticketNumber} </p>
    <p>Show: </p>
    <p>Time: </p>
    <p>Venue: </p>
    <QR text="testing"/>

    <button onClick={handleClick}>Transfer</button>
    </div>
     

    )
  }
  ;
  
  export default SingleTicket;