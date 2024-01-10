import "../styling/LoginPage.css";
import { Link } from "react-router-dom";

import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {

  return (
    <>
    <section className="login-area"> 
      <h2 className ="login-title">Login </h2>
      <div className ="login-content">
      <LoginForm  />
      </div>
      </section> 
      <p>
        Don't have an account? <Link to="/register">Register Here</Link>
      </p>
    </>
  );
};

export default LoginPage;
