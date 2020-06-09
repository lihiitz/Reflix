import React, {Component} from 'react'

class MovieDetail extends Component{
    render(){
        const movieId = this.props.match.params.movieId
        const movie = this.props.movies.find(m => m.id == movieId)        
        return(
            <div>
                <div>{movie.title}</div>
                <div>{movie.year}</div>
                <img src={movie.img}></img>
                <div>{movie.descrShort}</div>

            </div>
        )
    }
}

export default MovieDetail