import { useLocation } from "react-router";
import SingleTicket from "../components/singleTicket/singleTicket";

const SingleTicketPage = () => {
  const location = useLocation();
  const ticketDetails = location.state;

  return (
    <div>
      <SingleTicket ticketDetails={ticketDetails} />
    </div>
  );
};

export default SingleTicketPage;
