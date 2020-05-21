import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <ul className="nav">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/restaurants">Restaurants</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            
        </ul>
    )
}


export default NavBar
