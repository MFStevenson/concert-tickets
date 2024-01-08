import { postUser } from "../../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [err, setErr] = useState(null);
  const [formData, setFormData] = useState({
    forename: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const updateFormData = (e) => {
    setFormData(() => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setErr("Passwords do not match, please try again");
    } else {
      const postBody = {
        userName: formData.username,
        password: formData.password,
        email: formData.email,
        forename: formData.forename,
        surname: formData.surname,
      };
      postUser(postBody).then((res) => {
        navigate("/register/success");
      });
    }
  };
  return (
    <form id="register-form" onSubmit={handleSubmit}>
      <label>
        Forename
        <input
          type="text"
          required
          name="forename"
          placeholder="John"
          value={formData.forename}
          onChange={updateFormData}
        ></input>
      </label>
      <label>
        Surname
        <input
          type="text"
          required
          name="surname"
          placeholder="Smith"
          value={formData.surname}
          onChange={updateFormData}
        ></input>
      </label>
      <label>
        Username
        <input
          type="text"
          required
          name="username"
          placeholder="JohnS10"
          value={formData.username}
          onChange={updateFormData}
        ></input>
      </label>
      <label>
        Email
        <input
          type="text"
          required
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={updateFormData}
        ></input>
      </label>
      <label>
        Password
        <input
          type="password"
          required
          name="password"
          value={formData.password}
          onChange={updateFormData}
        ></input>
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          required
          name="confirm_password"
          value={formData.confirm_password}
          onChange={updateFormData}
        ></input>
      </label>

      <button>Register</button>
      {err ? <p>{err}</p> : null}
    </form>
  );
};

export default RegisterForm;
