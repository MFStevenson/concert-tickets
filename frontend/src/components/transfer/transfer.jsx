import { useState } from "react";
import { getUser, transferTicket } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import "../../styling/TransferPage.css";

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
    <div className="transfer-area">
      <h2> Transfer </h2>

      <section className="transfer-content">
        <p>
          Please enter the username of the person you'd like to transfer the
          ticket to.
        </p>
        <form className="transfer-form">
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
          <button className="transfer-button" onClick={handleConfirm}>
            Confirm
          </button>
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
