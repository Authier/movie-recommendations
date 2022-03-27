import React from "react";
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import "./row.css";

export default function Row (props) {
    
    /* The width should match the width in the movieCards.css file! */
    const width = 160 + 20;
    const [slideNumber, setSlideNumber] = React.useState(0);
    const lengthMovies = props.movies.length - Math.floor(window.innerWidth / width);
    const listRef = React.useRef();

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideNumber(oldNum => oldNum - 1)
            listRef.current.style.transform = `translateX(${-((slideNumber - 1) * width)}px)`
        } else if (direction === "right") {
            setSlideNumber(oldNum => oldNum + 1)
            listRef.current.style.transform = `translateX(${-((slideNumber + 1) * width)}px)`
        }
    }

    return (

        <div className="cards-main">
                <h1 id="body-card-title">{props.header}</h1>
            <div className="movies-main">

                {slideNumber > 0 && 
                <div 
                    className="to-left" 
                    onClick={() => handleClick("left")}>
                    <FaArrowLeft size={40} />
                </div>
                }

                <div 
                className="body-card-container"
                ref={listRef}
                >
                    {props.movies}
                </div>

                {slideNumber < lengthMovies && 
                <div 
                    className="to-right" 
                    onClick={() => handleClick("right")}>
                    <FaArrowRight size={40} />
                </div>
                }  
            </div>
        </div>
    )
}