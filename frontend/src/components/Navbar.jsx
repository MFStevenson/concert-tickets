import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>{"Concerts"}</Link>
        </li>

        {Object.keys(user).length ? (
          <>
            <li>
              <Link to={`/profile`}>{"Profile"}</Link>
            </li>
            <li>
              <Link to={`/mytickets`}>{"Tickets"}</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={`/login`}>{"Login"}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
