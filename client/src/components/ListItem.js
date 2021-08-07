import {
  Add,
  ExpandMore,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";

export const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  // Get detail movie from id
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/api/movies/find/${item}`, {
          headers: {
            token:
              "admin eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDkyYWQwOWVkYWQxMTA4OTA5N2U5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODI2MDQ3NCwiZXhwIjoxNjI4NjkyNDc0fQ.do_fK3pFZsT1tOlTcPmTV_pNC2_XCSXWNmfEVlvM-GY",
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    //Link representing the path and state to location
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listitem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.imgSmall} alt="" />
        {/* if user hover, show this content */}
        {isHovered && (
          <>
            {/* <iframe
            title="trailer"
            src="https://www.youtube.com/embed/eAA1ZDSCWjI?autoplay=1&mute=0&controls=1&modestbranding=1"
          ></iframe> */}

            <div className="listitem__info">
              <div className="listitem__info--icon">
                <PlayArrow className="ico" />
                <Add className="ico" />
                <ThumbUpOutlined className="ico" />
                <ThumbDownOutlined className="ico" />
                <ExpandMore className="ico" />
              </div>
              <div className="listitem__info--top">
                <span>1 hour 14 mins</span>
                <span className="top__limit">{movie.limit}+</span>
                <span>{movie.year}</span>
              </div>
              <div className="listitem__info--desc">{movie.desc}</div>
              <div className="listitem__info--genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
