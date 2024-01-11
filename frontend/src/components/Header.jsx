import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "./Navbar";

const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <header>
      <h1>Concert Blocks</h1>
      {Object.keys(user).length ? (
        <Link to="/profile">
          <img
            id="header-profile-pic"
            src={
              "https://cdn.icon-icons.com/icons2/3512/PNG/512/concert_online_music_icon_221030.png"
            }
            alt="profile picture"
          ></img>
        </Link>
      ) : (
        <p></p>
      )}
    </header>
  );
};

export default Header;
