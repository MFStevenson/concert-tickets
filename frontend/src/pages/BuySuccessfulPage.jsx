import { Link } from "react-router-dom";

const BuySuccessfulPage = () => {
  //change to ticket_id in database
  const ticket_id = 1;
  return (
    <>
      <h2>Your Purchase Was Successful</h2>
      <p>Please see the ticket below </p>
      {/* link to ticket */}
      <Link to={`/ticket/${ticket_id}`}>View Ticket</Link>
    </>
  );
};

export default BuySuccessfulPage;
