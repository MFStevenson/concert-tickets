import { useContext, useState } from "react";
import { getUser, transferTicket } from "../../utils/api";
import { Link } from "react-router-dom";
import "../../styling/TransferPage.css"

const Transfer = () => {
  const [input, setInput] = useState("");
  const [newTicketHolder, setTicketHolder] = useState({});
  const [transferComplete, setTransferComplete] = useState(false);

  const handleConfirm = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to submit?")) {
      //submit coding here
      getUser(input)
        .then((res) => {
          setTicketHolder(res.data);
          const postBody = {
            name: concertDetails.name,
            start_time: concertDetails.dates.start.localTime,
            date: concertDetails.dates.start.localDate,
            location: concertDetails._embedded.venues[0].city.name,
            price: concertDetails.priceRanges[0].min,
            email: newTicketHolder.email,
            transaction_type: "buy",
            qr: "", //previousQr
            admit: 1,
            uid: newTicketHolder.uid,
          };
          return transferTicket(postBody);
        })
        .then(() => {
          setTransferComplete(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className ="transfer-area">
      <h2> Transfer </h2>

<section className ="transfer-content"> 
      <p>
        Please enter the username of the person you'd like to transfer the
        ticket to.
      </p>
      <form className = "transfer-form">
        <label>
          Username
          <input
            type="text"
            required
            name="username"
            placeholder="JohnS10"
            value={input}
            onChange={updateInput}
          ></input>
        </label>
        <button className = "transfer-button" onClick={handleConfirm}>Confirm</button>
      </form>
      {transferComplete ? (
        <>
          <p>Transfer Complete</p>
          <Link to={"/mytickets"}>Return to my tickets</Link>
        </>
      ) : null}
      </section>
    </div>
  );
};
export default Transfer;
