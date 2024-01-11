import AboutMe from "./About-me";
import "../../styling/ProfilePage.css";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { getUserProfile } from "../../utils/api";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});
  const [favGenre, setFavGenre] = useState("");
  const [favArtist, setFavArtist] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    getUserProfile(user.userId).then((res) => {
      setUserDetails(res.data[0]);
      setFavGenre(res.data[0].favGenre);
      setFavArtist(res.data[0].favArtist);
      setBio(res.data[0].bio);
    });
  }, []);

  return (
    <div className="profile-area">
      <h2> Profile </h2>
      <section className="profile-content">
        <h3 className="profile-name-card">
          {userDetails.forename} {userDetails.surname}
        </h3>

        <AboutMe
          favGenre={favGenre}
          setFavGenre={setFavGenre}
          favArtist={favArtist}
          setFavArtist={setFavArtist}
          bio={bio}
          setBio={setBio}
        />
      </section>
    </div>
  );
};
export default Profile;
