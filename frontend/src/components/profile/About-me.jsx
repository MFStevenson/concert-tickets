import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styling/ProfilePage.css"

const AboutMe = () => {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const [favGenre, setFavGenre] = useState("dance");
  const [favArtist, setFavArtist] = useState("Abc");
  const [bio, setBio] = useState("testing bio");
  const navigate = useNavigate();

  const handleEdit = () => {
    setEditing(!isEditing);
  };
  const handleLogout = () => {
    setUser({});
    navigate("/");
  };

  if (isEditing) {
    return (
      <div className="about-me-card">
        <h4> About Me</h4>
        <form>
          <label>
            Favourite Genre:
            <input
              type="text"
              value={favGenre}
              onChange={(event) => setFavGenre(event.target.value)}
            />
          </label>

          <label>
            Favourite Artist:
            <input
              type="text"
              value={favArtist}
              onChange={(event) => setFavArtist(event.target.value)}
            />
          </label>

          <label>
            Bio:
            <input
              type="text"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
            />
          </label>
        </form>
        <Link to={"/mytickets"}>
          <button className = "ticket-button">View My Tickets</button>
        </Link>
        <button className = "logout-button" onClick={handleLogout}>Logout</button>
        <button className = "edit-button " onClick={handleEdit}>Submit</button>
      </div>
    );
  } else {
    return (
      <section className="about-me-card">
        <h4> About Me</h4>
        <p> Favourite Genre:{favGenre}</p>
        <p> Favourite Artist:{favArtist}</p>
        <p> Bio: {bio}</p>

        <Link to={"/mytickets"}>
          <button className = "ticket-button">View My Tickets</button>
        </Link>
        <button className = "logout-button" onClick={handleLogout}>Logout</button>
        <button className = "edit-button "onClick={handleEdit}>Edit</button>
      </section>
    );
  }
};

export default AboutMe;
