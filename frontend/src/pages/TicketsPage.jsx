import "../styling/TicketsPage.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getUserTickets } from "../utils/api";
import Loading from "../components/Loading";
const TicketsPage = () => {
  const { user } = useContext(UserContext);
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getUserTickets(user.userId)
      .then((res) => {
        setTickets(res.data);
        console.log(tickets);
      })
      .catch((error) => {
        console.error("Error fetching concerts:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        {" "}
        <Loading />{" "}
      </>
    );
  }
  return (
    <div className="area">
      <h2>My Tickets</h2>
      <section className="content">
        <div className="TicketList">
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket.ticketId} className="ticket">
                <h3>{ticket.name}</h3>
                <p>{ticket.date}</p>
                <p>Starts at {ticket.startTime}</p>
                <Link to={`/mytickets/${ticket.ticketId}`} state={ticket}>
                  {" "}
                  <button className="button"> View Ticket </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TicketsPage;
