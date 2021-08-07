import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

export const Watch = () => {
  const location = useLocation();
  //   console.log(location);
  const videoUrl = location.movie.video;
  return (
    <div className="watch">
      <Link to="/">
        <div className="watch__back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <iframe
        title="trailer"
        frameBorder="0"
        // src="https://www.youtube.com/embed/WcfRH2tgIxA?autoplay=1&mute=1&controls=1&modestbranding=1">
        src={videoUrl}
      ></iframe>
    </div>
  );
};
export default Watch;
