import { Link } from "react-router-dom";
import "../styling/SuccessfulPage.css"
const SuccessPage = () => {
  return (
  
    <div className = "success-area"> 
      <h2> Registration Successful</h2>
      <section className = "success-content"> 
      <p>
        {" "}
        Your account has been registered. Please return to the login page to use
        your new account
      </p>
       <Link to={"/login"}><button className="button">Login</button></Link>
      </section>
      </div>
    
  );
};

export default SuccessPage;
