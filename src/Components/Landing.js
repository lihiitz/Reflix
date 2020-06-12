import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Landing.css'

function Landing (props) {
   
        return(
            <div id="container">
                <div id="question">Who's watching?</div>
                <div id="users">
                    {props.users.map((u,i) => 
                    <div key={i}>
                        <Link style={{backgroundColor : u.color}} className="user" to={`/catalog/${u.name}`}>{u.name}</Link>
                    </div>)}
                </div>
            </div>
        )
}

export default Landing