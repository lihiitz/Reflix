import React, { Component } from 'react'
import Movie from './Movie'
import '../Styles/Catalog.css'

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            inputVal: "",
            movies: [],
            rentedMovies: []
        }
    }

    inputChange = (e) => {
        let tempMovies = [...this.props.state.movies]
        let tempRentedMovies = [...this.props.state.rentedMovies]

        if (e.target.value !== "") {
            tempMovies = tempMovies.filter(m => m.title.toLowerCase().includes(e.target.value.toLowerCase()))
            tempRentedMovies = tempRentedMovies.filter(m => m.title.toLowerCase().includes(e.target.value.toLowerCase()))

        }
        this.setState({
            inputVal: e.target.value.toLowerCase(),
            movies: tempMovies,
            rentedMovies: tempRentedMovies
        })
    }
    render() {
        const user = this.props.match.params.user
        const userBudget = this.props.state.users.find(u => u.name === user).budget
        return (
            <div>
                {this.state.inputVal == "" ?
                    <div>
                        <div className="header">
                            <input id="search" placeholder="Search movie" value={this.state.inputVal} onChange={this.inputChange}></input>
                            <div id="budget">budget : ${userBudget}</div>
                        </div>
                        <div id="catalog">
                            <div id="rentedHeader">rented</div>
                            <div className="catalogMovies">
                                {this.props.state.rentedMovies.map((m, i) =>
                                    <Movie rentFunc={this.props.rentFunc} key={i} user={user} movie={m} />)}
                            </div>
                        </div>
                        <div id="catalog">
                            <div id="catalogHeader">catalog</div>
                            <div className="catalogMovies">
                                {this.props.state.movies.map((m, i) =>
                                    <Movie rentFunc={this.props.rentFunc} key={i} user={user} movie={m} />)}
                            </div>
                        </div>
                    </div> :
                    <div>
                        <div className="header">
                            <input id="search" placeholder="Search movie" value={this.state.inputVal} onChange={this.inputChange}></input>
                            <div id="budget">budget : ${userBudget}</div>
                        </div>
                        <div id="rented">
                            <div id="rentedHeader">rented</div>
                            <div className="catalogMovies">
                                {this.state.rentedMovies.map((m, i) =>
                                    <Movie rentFunc={this.props.rentFunc} key={i} user={user} movie={m} />)}
                            </div>
                        </div>
                        <div id="catalog">
                            <div id="catalogHeader">catalog</div>
                            <div className="catalogMovies">
                                {this.state.movies.map((m, i) =>
                                    <Movie rentFunc={this.props.rentFunc} key={i} user={user} movie={m} />)}
                            </div>
                        </div>
                    </div>}

            </div>
        )
    }
}

export default Catalog