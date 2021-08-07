import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef, useState } from "react";
import "./List.scss";
import { ListItem } from "./ListItem";

export const List = ({ list }) => {
  //Frame have 5 element on screen, total array 10 element so after number click , i can't not allow to click this arrow
  const [slideNumber, setSlideNumber] = useState(0);
  //After move enough, hide the arrow
  const [isMoved, setIsMoved] = useState(false);
  //useRef for save
  const listRef = useRef();
  const handleClick = (direction) => {
    //Find distance from lef t=0 to width's element
    //why subtract 50 ?? width of arrow is 50
    const distance = listRef.current.getBoundingClientRect().x - 50;
    console.log(distance);
    //when click show the arrow again
    //distance increase every click on arrow. same same position.current + distance
    //what is 230 ? this is a width of listItem. Multiply with element that you want to translate
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 9) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="list__title">{list.title}</span>
      <div className="list__wrapper">
        <ArrowBackIos
          className="list__wrapper--sliderArrow left"
          style={{ display: isMoved && "none" }}
          onClick={() => handleClick("left")}
        />
        <div className="list__wrapper--container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIos
          className="list__wrapper--sliderArrow right"
          onClick={() => handleClick("right")}
          style={{ display: isMoved && "none" }}
        />
      </div>
    </div>
  );
};
