import React from "react";
import "./movieCards.css"

export default function MovieCards (props) {
    
    const handleLangChange = () => {
        const prop = props;
        props.handleCardClick(prop);            
    }
    return (
        <div className="moviecards-photo">
            {props.poster_path ? 
            <img 
            onClick={handleLangChange}
            id="moviecards-image" 
            src={props.poster_path}/> 
            :
            <img 
            onClick={handleLangChange}
            id="moviecards-image" 
            src="https://i.imgur.com/Z7CTBVp.png"/> 
            }
            <h1 id="movie-title-cards">{props.title}</h1>
        </div>
    )
}