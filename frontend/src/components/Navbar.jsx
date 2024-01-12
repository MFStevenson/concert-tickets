import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to={`/`}>
            <button className="menu-button">{"Concerts"}</button>
          </Link>
        </li>
        {Object.keys(user).length ? (
          <>
            <li>
              <Link to={`/profile`}>
                {" "}
                <button className="menu-button">{"Profile"} </button>
              </Link>
            </li>
            <li>
              <Link to={`/mytickets`}>
                <button className="menu-button">{"Tickets"} </button>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={`/login`}>
              <button className="menu-button">{"Login"} </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
