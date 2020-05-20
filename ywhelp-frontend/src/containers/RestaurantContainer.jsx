import React, { Component } from 'react'
import Search from '../components/Search'
import ListedRestaurants from './ListedRestaurants'


export class RestaurantContainer extends Component {

    state = {
        searchTerm: ""
    }


    changeSearchTerm = (term) => {

        this.setState({
            searchTerm: term
        })
    }

    specificRest = () => {
        let { restaurants } = this.props
        let { searchTerm } = this.state
        let filterArray = restaurants.filter(restaurant => {
            return restaurant.name.includes(searchTerm)
        })

        return filterArray
    }




    render() {
        console.log(this.props)
        return (

            <div className = "container" >
                <div className = "header" >
                    <h1 id = "head" > Restaurants </h1> 
                </div>



                <Search 
                    changeSearchTerm = {
                        this.changeSearchTerm
                    }
                    restSearchTerm = {
                        this.state.searchTerm
                    }
                />

                <ListedRestaurants 
                    restsArr = {
                        this.specificRest()
                    }
                />

            </div>
        )
    }
}

export default RestaurantContainer
