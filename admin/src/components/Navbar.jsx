import "./Navbar.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__wrapper--left">
          <span className="left__logo">LOGO</span>
        </div>
        <div className="navbar__wrapper--right">
          <div className="right__icon">
            <NotificationsNone />
            <span className="right__icon--badge ">1</span>
          </div>
          <div className="right__icon language">
            <Language />
            <div className="right__icon--option">
              <span>English</span>
              <span>Vietnamese</span>
            </div>
          </div>
          <div className="right__icon settings">
            <Settings />
            <div className="right__icon--option">
              <span>Change Password</span>
              <span>Logout</span>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1484771.jpg&fm=jpg/"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
