import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Movie.css'

function Movie(props) {
    const movie = props.movie
    const returnMovie = () => {
        props.rentFunc(false, movie.id, props.user)
    }

    const rentMovie = () => {
        props.rentFunc(true, movie.id, props.user)
    }

    return (
        <div className="">
            {movie.isRented ?
                <button onClick={returnMovie} className="returnMovie">RETURN MOVIE</button> :
                <button onClick={rentMovie} className="rentMovie">RENT MOVIE</button>}
            {<Link to={`/movies/${movie.id}`}>
                <div className="movie" style={{ backgroundImage: `url(${movie.img})` }}></div>
            </Link>}
        </div>
    )
}

export default Movie