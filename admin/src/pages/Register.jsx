import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const handleBtn = () => {};
  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form className="register__form">
        <div className="form__item">
          <label className="form__item--title">Username</label>
          <input type="text" placeholder="Input your username" />
        </div>

        <div className="form__item">
          <label className="form__item--title">Full Name</label>
          <input type="text" placeholder="Input full name" />
        </div>

        <div className="form__item">
          <label className="form__item--title">Password</label>
          <input type="password" placeholder="Input your password" />
        </div>

        <div className="form__item">
          <label className="form__item--title">Email</label>
          <input type="email" placeholder="Input your email" />
        </div>

        <div className="form__item">
          <label className="form__item--title">Phone Number</label>
          <input type="number" placeholder="Input your phone" />
        </div>

        <div className="form__item">
          <label className="form__item--title">Address</label>
          <input type="text" placeholder="Input your address" />
        </div>

        <div className="form__item">
          <label className="form__item--title">Gender</label>
          <div className="form__item--gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>

        <div className="form__item">
          <label for="">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <div className="register__action">
        <button className="register__action--confirm" onClick={() => handleBtn}>
          Finish
        </button>
        <button className="register__action--reset">Reset</button>
      </div>
    </div>
  );
};

export default Register;
