import "./FeatureInfo.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const FeatureInfo = () => {
  return (
    <div className="feature">
      <div className="feature__item">
        <span className="feature__item--title">Revenue</span>
        <div className="feature__item--moneyContainer">
          <span className="money">$123</span>
          <span className="moneyRate">
            -1.4
            <ArrowDownward className="moneyRate__icon" />
          </span>
        </div>
        <span className="feature__item--sub">Compared to last month</span>
      </div>

      <div className="feature__item">
        <span className="feature__item--title">Sales</span>
        <div className="feature__item--moneyContainer">
          <span className="money">$4,56</span>
          <span className="moneyRate">
            -1.4
            <ArrowDownward className="moneyRate__icon" />
          </span>
        </div>
        <span className="feature__item--sub">Compared to last month</span>
      </div>

      <div className="feature__item">
        <span className="feature__item--title">Cost</span>
        <div className="feature__item--moneyContainer">
          <span className="money">$2,023</span>
          <span className="moneyRate">
            +1.4
            <ArrowUpward className="moneyRate__icon positive" />
          </span>
        </div>
        <span className="feature__item--sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeatureInfo;
