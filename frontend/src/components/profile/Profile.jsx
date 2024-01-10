import AboutMe from "./About-me";
import "../../styling/ProfilePage.css"
const Profile = () => {
  return (
    <div className = "profile-area">
      <h2> Profile </h2>
      <section className = "profile-content">
      <h3 className="profile-name-card">Name</h3>

      <AboutMe />
      </section>
    </div>
  );
};
export default Profile;
