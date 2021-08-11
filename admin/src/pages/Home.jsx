import FeatureChart from "../components/FeatureChart";
import FeatureInfo from "../components/FeatureInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { data } from "../Dump.jsx";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <FeatureChart
        data={data}
        title="User Analytic"
        grid
        dataKey="Active User"
      />
      <div className="home__widget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
