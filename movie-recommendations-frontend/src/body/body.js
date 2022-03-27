import React from "react";
import axios from 'axios';

import MovieCards from "../movieCards/movieCards";
import MovieDetail from "../movieDetail/movieDetail";
import Row from "../movieCards/row.js";
import Search from "../search/search";
import Recommend from "../recommend/recommend";

import "./body.css";

import { nanoid } from 'nanoid'

import './body.css';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export default function Body () {
    
    const [change, setChange] = React.useState("")
    
    const [movieClicked, setMovieClicked] = React.useState(false)

    const [movieDetails, setMovieDetails] = React.useState()

    const [headerName, setHeaderName] = React.useState("")
    const [movies, setMovies] = React.useState([])
    
    /* Favorited Movies */
    const [favHeaderName, setFavHeaderName] = React.useState()
    const [favMovies, setFavMovies] = React.useState([])
    const [preliminaryFavMovies, setPreliminaryFavMovies] = React.useState([])
    const [favMoviesTMBDIDs, setFavMoviesTMBDIDs] = React.useState([])
    
    /* Recommended Movies */
    const [recHeaderName, setRecHeaderName] = React.useState("")
    const [recMovies, setRecMovies] = React.useState([])
    const [rec, setRec] = React.useState(false)



    function handleCardClick (event) {
        setMovieDetails(event)
        setMovieClicked(true)
    }

    function handleFavoriting (movie) {
        let deletion = false;
        
        for (let index = 0; index < favMoviesTMBDIDs.length; index++) {
            if (favMoviesTMBDIDs[index] === movie.id) {
                setChange(nanoid())
                setFavMoviesTMBDIDs(oldArray => {
                    oldArray.splice(index, 1)
                    return oldArray
                })
                setPreliminaryFavMovies(oldArray => {
                    oldArray.splice(index, 1)
                    return oldArray
                })
                if (favMoviesTMBDIDs.length === 1) {
                    setFavHeaderName()
                }
                deletion = true;
                break
            }
        }
        
        if (!deletion) {
            setChange(nanoid())
            setFavHeaderName("Favorited Movies")
            setFavMoviesTMBDIDs(oldArray => [...oldArray, movie.id])
            setPreliminaryFavMovies(oldArray => [...oldArray, movie])
        }
    }

    /* Assists with favoriting updates*/
    React.useEffect(() => {
        setFavMovies(
            preliminaryFavMovies.map(moviesInfo => {
                const use_id = nanoid()
                return (
                    <MovieCards 
                    key={use_id}
                    id={moviesInfo.id}
                    title={moviesInfo.title}
                    overview={moviesInfo.overview}
                    release_date={moviesInfo.release_date}
                    adult={moviesInfo.adult}
                    backdrop_path={moviesInfo.backdrop_path}
                    vote_count={moviesInfo.vote_count}
                    genre_ids={moviesInfo.genre_ids}
                    original_title={moviesInfo.original_title}
                    poster_path={moviesInfo.poster_path}
                    vote_average={moviesInfo.vote_average}
                    original_language={moviesInfo.original_language}
                    handleCardClick={handleCardClick}
                    />
                )
            })
        )

    }, [change])


    function handleSearchClick (event) {
        setHeaderName(`Search Results for '${event}'`)
        api.post("/search", {
            search_term: event
        }).then(res => {
            const x = res.data
            setMovies (
                x.map(moviesInfo => {
                    const use_id = nanoid()
                    return (
                        <MovieCards 
                        key={use_id}
                        id={moviesInfo.id}
                        title={moviesInfo.title}
                        overview={moviesInfo.overview}
                        release_date={moviesInfo.release_date}
                        adult={moviesInfo.adult}
                        backdrop_path={moviesInfo.backdrop_path}
                        vote_count={moviesInfo.vote_count}
                        genre_ids={moviesInfo.genre_ids}
                        original_title={moviesInfo.original_title}
                        poster_path={moviesInfo.poster_path}
                        vote_average={moviesInfo.vote_average}
                        original_language={moviesInfo.original_language}
                        handleCardClick={handleCardClick}
                        />
                    )
                })
            )
        }).catch(err => console.log(err))
    }
    
    function RecommendMovies () {
        api.post("/recommend", {
            tmdb_ids: favMoviesTMBDIDs
        }).then(res => {
            const x = res.data
            setRecMovies (
                x.map(moviesInfo => {
                    const use_id = nanoid()
                    return (
                        <MovieCards 
                        key={use_id}
                        id={moviesInfo.id}
                        title={moviesInfo.title}
                        overview={moviesInfo.overview}
                        release_date={moviesInfo.release_date}
                        adult={moviesInfo.adult}
                        backdrop_path={moviesInfo.backdrop_path}
                        vote_count={moviesInfo.vote_count}
                        genre_ids={moviesInfo.genre_ids}
                        original_title={moviesInfo.original_title}
                        poster_path={moviesInfo.poster_path}
                        vote_average={moviesInfo.vote_average}
                        original_language={moviesInfo.original_language}
                        handleCardClick={handleCardClick}
                        />
                        )
                    })
                    )
            }).catch(err => console.log(err))
        setRecHeaderName("Your Recommendations based on Machine Learning!")
        setRec(true)
    }
            
    return (
        <div>
            { 
                movieClicked ?
                <>
                </>
                :
                <div className="body-inputs">
                    <Search handleSearchClick={handleSearchClick}/>
                    { favMoviesTMBDIDs.length > 0 ?
                        <Recommend RecommendMovies={RecommendMovies}/>
                        :
                        <>
                        </>
                    }
                </div>
            }
            {
                movieClicked ?
                <>
                <MovieDetail 
                movieDetails={movieDetails}
                close={() => setMovieClicked(false)}
                handleFavoriting={handleFavoriting}
                favorited={favMoviesTMBDIDs}
                />
                </> 
                : 
                <>
                { rec ?
                    <Row movies={recMovies} header={recHeaderName}/>
                    :
                    <>
                    </>
                }
                <Row movies={movies} header={headerName}/>
                    <Row movies={favMovies} header={favHeaderName}/>
                </>
            }
        </div>
    )
}