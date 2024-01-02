import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>{"Concerts"}</Link>
        </li>
        <li>
          <Link to={`/profile`}>{"Profile"}</Link>
        </li>
        <li>
          <Link to={`/mytickets`}>{"Tickets"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
