import "../styling/TicketsPage.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getUserTickets } from "../utils/api";
const TicketsPage = () => {
  const { user } = useContext(UserContext);

  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getUserTickets(1)
      .then((res) => {
        setTickets(res.data);
      })
      .catch((error) => {
        console.error("Error fetching concerts:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <h2>My Tickets</h2>
      <div className="TicketList">
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.ticketId} className="ticket">
              <h3>{ticket.concertName}</h3>
              <Link to={`/mytickets/${ticket.ticketId}`}>View Ticket</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TicketsPage;
