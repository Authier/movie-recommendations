import React from "react";
import "./movieCards.css"

export default function MovieCards (props) {
    
    return (
        <div className="moviecards-photo">
            {props.poster_path ? 
            <img id="moviecards-image" src={props.poster_path}/> : <h1>d</h1>}
        </div>
    )
}