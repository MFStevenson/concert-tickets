import "../../styling/ProfilePage.css";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "../../utils/api";

const AboutMe = ({
  favArtist,
  favGenre,
  bio,
  setFavArtist,
  setFavGenre,
  setBio,
}) => {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    favGenre: "",
    favArtist: "",
    bio: "",
  });

  const navigate = useNavigate();

  const updateFormData = (e) => {
    setFormData(() => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  const handleEdit = () => {
    setEditing(!isEditing);
    if (isEditing) {
      const patchBody = {
        userId: user.userId,
        favGenre: formData.favGenre,
        favArtist: formData.favArtist,
        bio: formData.bio,
        profilePic: "pic_url",
      };
      setFavGenre(formData.favGenre);
      setFavArtist(formData.favArtist);
      setBio(formData.bio);
      updateProfile(patchBody).catch((err) => {
        console.log(err);
      });
    }
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
              name="favGenre"
              placeholder="type your favourite genre"
              value={formData.favGenre}
              onChange={updateFormData}
            />
          </label>

          <label>
            Favourite Artist:
            <input
              type="text"
              name="favArtist"
              placeholder="type your favourite artist"
              value={formData.favArtist}
              onChange={updateFormData}
            />
          </label>

          <label>
            Bio:
            <input
              type="text"
              name="bio"
              placeholder="type about yourself"
              value={formData.bio}
              onChange={updateFormData}
            />
          </label>
        </form>
        <Link to={"/mytickets"}>
          <button className="ticket-button">View My Tickets</button>
        </Link>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
        <button className="edit-button " onClick={handleEdit}>
          Submit
        </button>
      </div>
    );
  } else {
    return (
      <section className="about-me-card">
        <h4> About Me</h4>
        <p> My favourite genre of music is {favGenre}</p>
        <p> My favourite artist is {favArtist}</p>
        <p> Bio: {bio}</p>

        <Link to={"/mytickets"}>
          <button className="ticket-button">View My Tickets</button>
        </Link>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
        <button className="edit-button " onClick={handleEdit}>
          Edit
        </button>
      </section>
    );
  }
};

export default AboutMe;
