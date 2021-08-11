import {
  AttachMoney,
  ChatBubbleOutlineOutlined,
  Equalizer,
  LibraryBooksOutlined,
  LineStyle,
  MailOutline,
  NewReleases,
  PersonAddOutlined,
  PersonOutlineOutlined,
  StorefrontOutlined,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="wrapper__menu">
          <h3 className="wrapper__menu--title">Dashboard</h3>
          <ul className="wrapper__menu--list">
            <Link to="/">
              <li className="list__item">
                <LineStyle className="item__icon" />
                Home
              </li>
            </Link>
            <li className="list__item">
              <Timeline className="item__icon" />
              Analytics
            </li>
            <li className="list__item">
              <TrendingUp className="item__icon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="wrapper__menu">
          <h3 className="wrapper__menu--title">Quick Menu</h3>
          <ul className="wrapper__menu--list">
            <Link to="/users">
              <li className="list__item">
                <PersonOutlineOutlined className="item__icon" />
                Users
              </li>
            </Link>
            <Link to="/register">
              <li className="list__item">
                <PersonAddOutlined className="item__icon" />
                Register
              </li>
            </Link>
            <Link to="/products">
              <li className="list__item">
                <StorefrontOutlined className="item__icon" />
                Products
              </li>
            </Link>
            <li className="list__item">
              <AttachMoney className="item__icon" />
              Transactions
            </li>
            <li className="list__item">
              <Equalizer className="item__icon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="wrapper__menu">
          <h3 className="wrapper__menu--title">Notifications</h3>
          <ul className="wrapper__menu--list">
            <li className="list__item">
              <MailOutline className="item__icon" />
              Mails
            </li>
            <li className="list__item">
              <LibraryBooksOutlined className="item__icon" />
              Feedbacks
            </li>
            <li className="list__item">
              <ChatBubbleOutlineOutlined className="item__icon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="wrapper__menu">
          <h3 className="wrapper__menu--title">Staff</h3>
          <ul className="wrapper__menu--list">
            <li className="list__item">
              <WorkOutline className="item__icon" />
              Manage
            </li>
            <li className="list__item">
              <Timeline className="item__icon" />
              Analytics
            </li>
            <li className="list__item">
              <NewReleases className="item__icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
