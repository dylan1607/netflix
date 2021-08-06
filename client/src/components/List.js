import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useRef, useState } from 'react';
import './List.scss';
import { ListItem } from './ListItem';

export const List = () => {
    //Frame have 5 element on screen, total array 10 element so after number click , i can't not allow to click this arrow
    const [slideNumber, setSlideNumber] = useState(0);
    //After move enough, hide the arrow 
    const [isMoved, setIsMoved] = useState(false);
    //useRef for save 
    const listRef = useRef();
    const handleClick = (direction) => {
        //Find distance from left=0 to width's element
        //why subtract 50 ?? width of arrow is 50
        const distance = listRef.current.getBoundingClientRect().x - 50 ;
        console.log(distance);
        //when click show the arrow again
        setIsMoved(true); 
        //distance increase every click on arrow. same same position.current + distance
        //what is 230 ? this is a width of listItem. Multiply with element that you want to translate
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230*5 + distance}px)`;
            setIsMoved(false); 
        }
        if (direction === 'right' && slideNumber < 1) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230*5 + distance}px)`;
            setIsMoved(true);
        }
    };
    return (
        <div className='list'>
            <span className="list__title">
                Popular on Netflix
            </span>
            <div className="list__wrapper">
                <ArrowBackIos 
                    className='list__wrapper--sliderArrow left' 
                    style={{display: !isMoved && 'none'}} 
                    onClick={() => handleClick('left')}
                />
                <div className="list__wrapper--container" ref={listRef}>
                     <ListItem index={0}/>
                     <ListItem index={1}/>
                     <ListItem index={2}/>
                     <ListItem index={3}/>
                     <ListItem index={4}/>
                     <ListItem index={5}/>
                     <ListItem index={6}/>
                     <ListItem index={7}/>
                     <ListItem index={8}/>
                     <ListItem index={9}/>
                </div>
                <ArrowForwardIos 
                    className='list__wrapper--sliderArrow right' 
                    onClick={() => handleClick('right')}
                    style={{display: isMoved && 'none'}}     
                />
            </div>
        </div>
    )
}
