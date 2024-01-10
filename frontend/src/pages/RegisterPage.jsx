import "../styling/RegisterPage.css";

import RegisterForm from "../components/login/RegisterForm";

const RegisterPage = () => {
  
  return (
    <>
    <div className="register-area"> 
      {" "}
      
      <h2>Register</h2>
      <section className ="register-content"> 
      <RegisterForm />
      </section>
      </div>
    </>
  );
};

export default RegisterPage;
