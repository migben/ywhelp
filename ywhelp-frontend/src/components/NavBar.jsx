import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <ul className="nav">
            <li className="left-li">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="left-li" >
                <NavLink to="/restaurants">Restaurants</NavLink>
            </li>
            <li className="left-li" >
                <NavLink to="/about">About</NavLink>
            </li>

            <li className="right-li" >
                <NavLink to="/Signup">Sign up</NavLink>
            </li>
            <li className="right-li" >
                <NavLink to="/Login">Log in</NavLink>
            </li>
            
            
        </ul>
    )
}


export default NavBar
