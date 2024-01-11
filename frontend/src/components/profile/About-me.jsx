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
  picUrl,
  setPicUrl,
}) => {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    favGenre: "",
    favArtist: "",
    bio: "",
    profilePic: "",
  });

  const navigate = useNavigate();

  const updateFormData = (e) => {
    setFormData(() => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  const handleImageUpload = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await fetch("http://localhost:5175/profile/upload", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Image URL:", data.imageUrl);
          // Save the image URL to the state
          setPicUrl(data.imageUrl);
          formData.picUrl = data.imageUrl;
        } else {
          console.error("Error uploading image:", await response.text());
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleEdit = () => {
    setEditing(!isEditing);
    if (isEditing) {
      const patchBody = {
        userId: user.userId,
        favGenre: formData.favGenre,
        favArtist: formData.favArtist,
        bio: formData.bio,
        profilePic:
          "https://cdn.icon-icons.com/icons2/3512/PNG/512/concert_online_music_icon_221030.png",
      };
      setFavGenre(formData.favGenre);
      setFavArtist(formData.favArtist);
      setBio(formData.bio);
      setPicUrl(patchBody.profilePic);
      console.log(patchBody);
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
        <form className="profile-form">
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
          {/* <label>
            Profile Picture
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e)}
            />
          </label> */}
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
        <img src={picUrl} alt={"profile picture"} />
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
