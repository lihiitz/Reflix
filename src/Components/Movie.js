import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Movie.css'

class Movie extends Component{
    returnMovie = () => {
        this.props.rentFunc(false, this.props.movie.id, this.props.user)
    }

    rentMovie = () => {
        this.props.rentFunc(true, this.props.movie.id, this.props.user)
    }

    render(){
        const movie = this.props.movie
        return(
            <div className="">
                {/* {movie.isRented ? 
                <button onClick={this.returnMovie} className="returnMovie">RETURN MOVIE</button> :
                <button onClick={this.rentMovie} className="rentMovie">RENT MOVIE</button>} */}
                {<Link to={`/movies/${movie.id}`}>
                    <div className="movie" style={{backgroundImage : `url(${movie.img})`}}></div>
                </Link>}
            </div>
        )
    }
}

export default Movie