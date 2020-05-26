import React from 'react'
import {NavLink} from 'react-router-dom'

function Restaurants(props) {

    let NavNames = props.rests.map( (restObj, i)=> {
        return(
            <li key={i} >
                <NavLink to={`/${(restObj.name).split(" ").join("")}`} >{restObj.name}</NavLink>
            </li>
        )
    })

    return (
        <ul className="rest-container">
           {NavNames}
        </ul>
    )
}


export default Restaurants