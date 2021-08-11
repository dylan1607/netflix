import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import "./User.scss";

const User = () => {
  return (
    <div className="user">
      <div className="user__container">
        <h2 className="container__title">Edit User</h2>
      </div>
      <div className="user__info">
        <div className="info__show">
          <div className="info__show--title">
            <img
              src="https://images.pexels.com/photos/1830937/pexels-photo-1830937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="title--right">
              <div className="show--username">Dylan</div>
              <div className="show--title">Engingeer</div>
            </div>
          </div>
          <div className="info__show--detail">
            <span className="detail--title">Username</span>
            <div className="detail--info">
              <PermIdentity className="info--icon" />
              <span>dylan1607</span>
            </div>
            <span className="detail--title">Phone Number</span>

            <div className="detail--info">
              <PhoneAndroid className="info--icon" />
              <span>+1 23456789</span>
            </div>
            <span className="detail--title">Email</span>

            <div className="detail--info">
              <MailOutline className="info--icon" />
              <span>dylan@gmail.com</span>
            </div>
            <span className="detail--title">Location</span>

            <div className="detail--info">
              <LocationSearching className="info--icon" />
              <span>HoChiMinh | Vietnam</span>
            </div>
          </div>
        </div>
        <div className="info__update">
          <span className="update__title">Edit</span>
          <form action="" className="update__form">
            <div className="form__left">
              <div className="form__left--item">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="dylan1607"
                  className="item--input"
                />
              </div>

              <div className="form__left--item">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 2345678"
                  className="item--input"
                />
              </div>

              <div className="form__left--item">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="dylan1607@gmail.com"
                  className="item--input"
                />
              </div>

              <div className="form__left--item">
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  placeholder="HoChiMinh"
                  className="item--input"
                />
              </div>
            </div>
            <div className="form__right">
              <div className="form__right--update">
                <img
                  src="https://images.pexels.com/photos/1830937/pexels-photo-1830937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="update--icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="form__right--btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
