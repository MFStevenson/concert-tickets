import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/api";
import "../../styling/LoginPage.css"
import bcrypt from "bcryptjs";

const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const [formData, setformData] = useState({ username: "", password: "" });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const updateformData = (e) => {
    setformData(() => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getUser(formData.username)
      .then((res) => {
        if (
          formData.username === res.data[0].userName &&
          bcrypt.compareSync(formData.password, res.data[0].password)
        ) {
          setUser(res.data[0]);
          navigate("/profile");
        } else {
          setUser({});
          setErr("Something went wrong, please try again");
        }
      })
      .catch(() => {
        setUser({});
        setErr("Your username or password is incorrect, please try again");
      });
  };
  return (
    
    <form id="login-form" onSubmit={handleSubmit}>
      <label>
        Username*{" "}
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={updateformData}
        ></input>
      </label>
      <label>
        Password*
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={updateformData}
        ></input>
      </label>

      <button className = "button" id="sign-in-btn">Sign in</button>

      {err ? <p>{err}</p> : null}
    </form>
   
  );
};

export default LoginForm;
