import React from 'react'

const Restaurant = (props) => {
    let {restaurant} = props

    {
        console.log(restaurant)
    }

    return (

        
        <div className="restaurant">
            <h3 className="restaurant_name">{restaurant.name}</h3>
            <p> <strong>Address</strong>: {restaurant.location}</p>
            <p> <strong>Rating</strong>: {restaurant.rating} | <strong>Price</strong> {restaurant.price_range}</p>
            <p> <strong>Category</strong>: {restaurant.category}</p>
            <hr/>
        </div>
    )
}

export default Restaurant
