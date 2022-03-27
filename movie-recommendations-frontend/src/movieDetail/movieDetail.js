import React from "react";
import './movieDetail.css';
import { BsFillStarFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';

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
        <div className="movie-detail-container">
            <div className="closing-button"  onClick={props.close} >
                <BiArrowBack size={70} 
                id="closing-button" 
                />
            </div>
            <div className="movie-detail-inner-container">
                <img id="movie-detail-poster" src={props.movieDetails.poster_path} />
                <div className="movie-detail-info">
                    <h1 id="movie-detail-title">{props.movieDetails.title}</h1>
                    <div className="movie-detail-description">
                        <div className="movie-detail-d2"> 
                            <div className="movie-detail-d2-children">
                                {props.movieDetails.release_date}
                            </div>
                            <div className="movie-detail-d2-children">
                                
                            </div>
                            <div className="movie-detail-d2-children">
                                {props.movieDetails.vote_average}
                                &nbsp;
                                <BsFillStarFill color="gold"/>
                                &nbsp;
                                ({props.movieDetails.vote_count})
                            </div>
                        </div>
                        <p className="movie-detail-overview">
                            {props.movieDetails.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}