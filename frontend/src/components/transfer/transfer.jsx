import { useContext, useState } from "react";
import { getUser, transferTicket } from "../../utils/api";
import { Link } from "react-router-dom";

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
    <div>
      <h2> Transfer </h2>

      <p>
        Please enter the username of the person you'd like to transfer the
        ticket to.
      </p>
      <form>
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
        <button onClick={handleConfirm}>Confirm</button>
      </form>
      {transferComplete ? (
        <>
          <p>Transfer Complete</p>
          <Link to={"/mytickets"}>Return to my tickets</Link>
        </>
      ) : null}
    </div>
  );
};
export default Transfer;
