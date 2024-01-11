import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "./Navbar";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <h1>Concert Tickets</h1>
      {Object.keys(user).length ? (
        <Link to="/profile">
          <img
            id="header-profile-pic"
            src={user.avatar_url}
            alt="profile picture"
          ></img>
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
};

export default Header;
