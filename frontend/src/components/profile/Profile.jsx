import AboutMe from "./About-me";
import "../../styling/ProfilePage.css";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { getUserProfile } from "../../utils/api";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUserProfile(user.userId).then((res) => {
      setUserDetails(res.data[0]);
    });
  }, []);

  return (
    <div className="profile-area">
      <h2> Profile </h2>
      <section className="profile-content">
        <h3 className="profile-name-card">
          {userDetails.forename} {userDetails.surname}
        </h3>

        <AboutMe userDetails={userDetails} />
      </section>
    </div>
  );
};
export default Profile;
