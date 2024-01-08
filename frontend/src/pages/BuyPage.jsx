import { Link } from "react-router-dom";

const BuyPage = () => {
  return (
    <>
      <h3>Buy ticket</h3>
      {/* contain details about buying and connect to api to complete purchase
      will link to tthe correct ticketpage */}
      <Link to={""}>View Ticket</Link>
    </>
  );
};

export default BuyPage;
