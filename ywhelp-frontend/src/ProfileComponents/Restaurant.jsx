import React from 'react'

const Restaurant= (props) => {
    let {restaurant} = props

    return (
        <div className="restaurant">
            <h3 className="restaurant_name">{restaurant.name}</h3>
            <p>{restaurant.location}</p>
            <p> {restaurant.rating} | {restaurant.price_range}</p>
            <P> {restaurant.category}</P>
        
        </div>
    )
}

export default Restaurant
