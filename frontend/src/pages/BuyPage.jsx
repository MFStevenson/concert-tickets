import { Link, useParams } from "react-router-dom";

const BuyPage = () => {
  let { ticket_id } = useParams();
  //temp assign till backend connected
  ticket_id = 1;
  return (
    <>
      <h3>Buy ticket</h3>
      {/* contain details about buying and connect to api to complete purchase
      will link to tthe correct ticketpage */}
      <Link to={`/ticket/${ticket_id}`}>View Ticket</Link>
    </>
  );
};

export default BuyPage;
