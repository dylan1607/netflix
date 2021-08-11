import { Visibility } from "@material-ui/icons";
import "./WidgetSm.scss";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      {/* <span className="widgetSm__title">New Join Users</span> */}
      <span className="widgetSm__title">New user</span>

      <ul className="widgetSm__list">
        <li className="widgetSm__lislt--itemSm">
          <img
            src="https://images.pexels.com/photos/1830937/pexels-photo-1830937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="avatar"
          />
          <div className="itemSm__info">
            <span className="itemSm__info--username">Dylan</span>
            <span className="itemSm__info--job">Engineer</span>
          </div>
          <button className="itemSm__button">
            <Visibility className="itemSm__button--icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
