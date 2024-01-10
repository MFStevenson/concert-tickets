import { useState } from "react";
import { getUser, transferTicket } from "../../utils/api";
import { Link, useParams } from "react-router-dom";

const Transfer = () => {
  const { ticket_id } = useParams();
  const [input, setInput] = useState("");
  const [transferComplete, setTransferComplete] = useState(false);

  const handleConfirm = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to submit?")) {
      //submit coding here
      getUser(input)
        .then((res) => {
          const newTicketHolder = {
            uid: res.data[0].userId,
            email: res.data[0].email,
          };

          const patchBody = {
            uid: newTicketHolder.uid,
            ticketId: ticket_id,
            email: newTicketHolder.email,
            transactionType: "transfer",
          };
          return transferTicket(patchBody);
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
