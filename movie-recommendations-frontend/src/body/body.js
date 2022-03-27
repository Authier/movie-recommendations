import React from "react";
import axios from 'axios';

import MovieCards from "../movieCards/movieCards";

import MovieDetail from "../movieDetail/movieDetail";
import Row from "../movieCards/row.js";
import Search from "../search/search";

import { nanoid } from 'nanoid'

import './body.css';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export default function Body () {
    
    const [movieClicked, setMovieClicked] = React.useState(false)

    const [headerName, setHeaderName] = React.useState("")
    const [movieDetails, setMovieDetails] = React.useState()
    const [movies, setMovies] = React.useState([])

    function handleCardClick (event) {
        setMovieDetails(event)
        setMovieClicked(true)
    }

    function handleSearchClick (event) {

    }

    // React.useEffect(() => {
    //     api.get("/").then(res => {
    //         const x = res.data
    //         setMovies (
    //             x.map(moviesInfo => {
    //                 const use_id = nanoid()
    //                 return (
    //                     <MovieCards 
    //                     key={use_id}
    //                     id={use_id}
    //                     title={moviesInfo.title}
    //                     overview={moviesInfo.overview}
    //                     release_date={moviesInfo.release_date}
    //                     adult={moviesInfo.adult}
    //                     backdrop_path={moviesInfo.backdrop_path}
    //                     vote_count={moviesInfo.vote_count}
    //                     genre_ids={moviesInfo.genre_ids}
    //                     original_title={moviesInfo.original_title}
    //                     poster_path={moviesInfo.poster_path}
    //                     vote_average={moviesInfo.vote_average}
    //                     original_language={moviesInfo.original_language}
    //                     handleCardClick={handleCardClick}
    //                     />
    //                 )
    //             })
    //         )
    //     }).catch(err => console.log(err))
    // }, [])

    return (
        <div>
            <Search handleSearchClick={handleSearchClick}/>
            {
                movieClicked ? 
                <MovieDetail 
                movieDetails={movieDetails}
                close={() => setMovieClicked(false)}
                />
                : 
                <>
                <Row movies={movies} header={headerName}/>
                </>
            }
        </div>
    )
}