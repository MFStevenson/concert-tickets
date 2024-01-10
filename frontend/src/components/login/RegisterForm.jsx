import { postUser } from "../../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const RegisterForm = () => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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

  const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setErr("Passwords do not match, please try again");
    } else {
      const hashed = hashPassword(formData.password).toString();
      const postBody = {
        userName: formData.username,
        password: hashed,
        email: formData.email,
        forename: formData.forename,
        surname: formData.surname,
      };
      postUser(postBody)
        .then(() => {
          navigate("/register/success");
        })
        .catch((err) => {
          setErr("Something went wrong, please try again");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  if (isLoading) return <h3>Loading...</h3>;
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
          type="email"
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

      <button className = "button">Register</button>
      {err ? <p>{err}</p> : null}
    </form>
  );
};

export default RegisterForm;
