import React from "react";
import "./recommend.css";

export default function Recommend (props) {

    return (
        <div className="recommend-container">
            <button id="recommend-button" onClick={props.RecommendMovies}>Recommend!</button>
        </div>
    )
}