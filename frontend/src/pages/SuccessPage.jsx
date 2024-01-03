import { Link } from "react-router-dom";
const SuccessPage = () => {
  return (
    <>
      <h2> Registration Successful</h2>
      <p>
        {" "}
        Your account has been registered. Please return to the login page to use
        your new account
      </p>
      <Link to={"/login"}>Login</Link>
    </>
  );
};

export default SuccessPage;
