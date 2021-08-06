import { Add, ExpandMore, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons';
import { useState } from 'react';
import './ListItem.scss';

export const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className='listitem' 
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABaBYNc51xoWnBCQrYE9XIntUfwuHsgUDOnVuscZAIXoWWZpo8HsQFnL59G9mbaVHZ1UO-5TOY8DaLt--y8mjiYCPfLT1eW4DOSQJYKoFkCKeIH34HptCV4mKPrXA.jpg?r=53a" alt="" />
            {/* if user hover, show this content */}
            {isHovered && (
                <>
                    {/* <video 
                        title='trailer' 
                        src={trailer}
                        autoplay={true}
                        loop
                    /> */}
                    <iframe title='trailer' frameborder='0'
                        src="https://www.youtube.com/embed/eAA1ZDSCWjI?autoplay=1&mute=0&controls=1&modestbranding=1">
                    </iframe>
                    <div className="listitem__info">
                        <div className="listitem__info--icon">
                            <PlayArrow className='ico'/>
                            <Add className='ico'/>
                            <ThumbUpOutlined className='ico'/>
                            <ThumbDownOutlined className='ico'/>
                            <ExpandMore className='ico'/>
                        </div>
                        <div className="listitem__info--top">
                            <span>1 hour 14 mins</span>
                            <span className='top__limit'>16+</span>
                            <span>2020</span>
                        </div>
                        <div className="listitem__info--desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eveniet?
                        </div>
                        <div className="listitem__info--genre">
                            Action
                        </div>
                    </div>
                </>
            )}
            
        </div>
    )
}
