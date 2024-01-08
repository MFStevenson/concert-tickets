import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const { user } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const [favGenre, setFavGenre] = useState("dance");
  const [favArtist, setFavArtist] = useState("Abc");
  const [bio, setBio] = useState("testing bio");
  const handleEdit = () => {
    setEditing(!isEditing);
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
          <button>View My Tickets</button>
        </Link>
        <button>Logout</button>
        <button onClick={handleEdit}>Submit</button>
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
          <button>View My Tickets</button>
        </Link>
        <button>Logout</button>
        <button onClick={handleEdit}>Edit</button>
      </section>
    );
  }
};

export default AboutMe;
