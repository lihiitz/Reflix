import React, { useState } from 'react'
import Movie from './Movie'
import '../Styles/Catalog.css'

function Catalog(props) {
    const user = props.users.find(u => u.name === props.match.params.user)

    let [input, setInput] = useState("")
    let [searchMovies, setMovies] = useState([])
    let [searchRentedMovies, setRentedMovies] = useState([])

    const inputChange = (e) => {
        let tempMovies = [...props.movies]
        let tempRentedMovies = [...user.rented]
        if (e.target.value !== "") {
            tempMovies = tempMovies.filter(m => m.title.toLowerCase().includes(e.target.value.toLowerCase()))
            tempRentedMovies = tempRentedMovies.filter(m => m.title.toLowerCase().includes(e.target.value.toLowerCase()))

        }
        setInput(e.target.value.toLowerCase())
        setMovies(tempMovies)
        setRentedMovies(tempRentedMovies)
    }


    const userBudget = user.budget

    return (
        <div>
            <div className="header">
                <input id="search" placeholder="Search movie" value={input} onChange={inputChange}></input>
                <div id="budget">budget : ${userBudget}</div>
            </div>
            <div id="catalog">
                <div id="rentedHeader">rented</div>
                <div className="catalogMovies">
                    {input == "" ? user.rented.map((m, i) =>
                        <Movie rentFunc={props.rentFunc} key={i} user={user} movie={m} />) :
                        searchRentedMovies.map((m, i) =>
                            <Movie rentFunc={props.rentFunc} key={i} user={user} movie={m} />)}
                </div>
            </div>
            <div id="catalog">
                <div id="catalogHeader">catalog</div>
                <div className="catalogMovies">
                    {input == "" ? props.movies.map((m, i) =>
                        <Movie rentFunc={props.rentFunc} key={i} user={user} movie={m} />) :
                        searchMovies.map((m, i) =>
                            <Movie rentFunc={props.rentFunc} key={i} user={user} movie={m} />)}
                </div>
            </div>
        </div>
    )
}

export default Catalog