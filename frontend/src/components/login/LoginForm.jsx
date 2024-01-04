import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/api";

const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState({ username: "", password: "" });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const updateInput = (e) => {
    setInput(() => {
      return { ...input, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    getUser(input)
      .then((res) => {
        setUser(res.data.user);
        if (
          input.username === res.data.user.username &&
          input.password === res.data.user.password
        ) {
          navigate("/profile");
        } else {
          setUser({});
          setErr("Something went wrong, please try again");
        }
      })
      .catch(() => {
        setUser({});
        setErr("Something went wrong, please try again");
      });

    e.preventDefault();
    setInput("");
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
          value={input.username}
          onChange={updateInput}
        ></input>
      </label>
      <label>
        Password*
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          value={input.password}
          onChange={updateInput}
        ></input>
      </label>

      <button id="sign-in-btn">Sign in</button>

      {err ? <p>{err}</p> : null}
    </form>
  );
};

export default LoginForm;
