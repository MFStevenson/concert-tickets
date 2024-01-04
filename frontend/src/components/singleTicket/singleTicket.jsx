import QR from "./QRcode";


const SingleTicket = () => {

   

return (
    <div> 
    <h2> Ticket </h2>
    <p>Ticket no.: </p>
    <p>Show: </p>
    <p>Time: </p>
    <p>Venue: </p>
    <QR text="testing"/>

    <button> Transfer </button>
    </div>
   
    )
  }
  ;
  
  export default SingleTicket;