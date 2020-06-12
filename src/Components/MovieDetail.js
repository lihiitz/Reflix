import React from 'react'

function MovieDetail(props) {
    const movieId = props.match.params.movieId
    const movie = props.movies.find(m => m.id == movieId)
    return (
        <div>
            <div>{movie.title}</div>
            <div>{movie.year}</div>
            <img src={movie.img}></img>
            <div>{movie.descrShort}</div>
        </div>
    )
}

export default MovieDetail