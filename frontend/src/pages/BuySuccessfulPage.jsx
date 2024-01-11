import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { buyTicket } from "../utils/api";
import "../styling/SuccessfulPage.css";
import cryptoRandomString from "crypto-random-string";
import Errors from "../components/Errors";

const BuySuccessfulPage = () => {
  const { user } = useContext(UserContext);
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [ticketDetails, setTicketDetails] = useState({});
  const [apiErr, setApiErr] = useState({});
  const { ticket_id } = useParams();

  const location = useLocation();
  const concertDetails = location.state;

  const generateQrCode = () => {
    return cryptoRandomString({ length: 16 });
  };
  useEffect(() => {
    const postBody = {
      name: concertDetails.name,
      start_time: concertDetails.dates.start.localTime,
      date: concertDetails.dates.start.localDate,
      location: concertDetails._embedded.venues[0].city.name,
      price: concertDetails.priceRanges[0].min,
      email: user.email,
      transactionType: "buy",
      qr: generateQrCode(),
      admit: 1,
      uid: user.userId,
    };
    buyTicket(postBody)
      .then((res) => {
        setTicketDetails(res.data.responseData);
        setTicketGenerated(true);
      })
      .catch((err) => {
        setApiErr(err);
      });
  }, []);

  if (Object.keys(apiErr).length) {
    return <Errors status={apiErr.status} msg={apiErr.msg} />;
  } else {
    return (
      <div className="success-area">
        <h2>Your Purchase Was Successful</h2>
        <section className="success-content">
          <p>Please wait for the ticket to be created </p>
          {ticketGenerated ? (
            <Link
              to={`/mytickets/${ticketDetails.ticketId}`}
              state={ticketDetails}
            >
              <button className="button"> View Ticket </button>
            </Link>
          ) : null}
        </section>
      </div>
    );
  }
};

export default BuySuccessfulPage;
