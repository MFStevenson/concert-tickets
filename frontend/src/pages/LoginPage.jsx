import "../styling/LoginPage.css";
import { Link } from "react-router-dom";

import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {

  return (
    <>
      <h2>Login </h2>
      <LoginForm />
      <p>
        Don't have an account? <Link to="/register">Register Here</Link>
      </p>
    </>
  );
};

export default LoginPage;
