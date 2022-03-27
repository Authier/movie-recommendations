import React from "react";
import './movieDetail.css';

// key={use_id}
// id={use_id}
// title={moviesInfo.title}
// overview={moviesInfo.overview}
// release_date={moviesInfo.release_date}
// adult={moviesInfo.adult}
// backdrop_path={moviesInfo.backdrop_path}
// vote_count={moviesInfo.vote_count}
// genre_ids={moviesInfo.genre_ids}
// original_title={moviesInfo.original_title}
// poster_path={moviesInfo.poster_path}
// vote_average={moviesInfo.vote_average}
// original_language={moviesInfo.original_language}
// handleCardClick={handleCardClick}

export default function MovieDetail (props) {
    console.log(props.movieDetails)
    return (
        <div onClick={props.close} className="movie-detail-container">
            <div className="movie-detail-inner-container">
                <img id="movie-detail-poster" src={props.movieDetails.poster_path} />
                <div className="movie-detail-info">
                    <h1 id="movie-detail-title">{props.movieDetails.title}</h1>
                    <div className="movie-detail-description">
                        <p>
                            {props.movieDetails.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}