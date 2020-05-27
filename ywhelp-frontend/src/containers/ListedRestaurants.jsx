import React, { Component } from 'react'
import Restaurant from '../ProfileComponents/Restaurant'
import Restaurants from '../ProfileComponents/Restaurants'
import {Switch, Route} from 'react-router-dom'

class ListedRestaurants extends Component {


    




    render() {
        return (
            <div className="listing">
                <div id="listing-options">
                    <Restaurants  rests={this.props.restsArr} />
                    
                </div>
            </div>
        )
    }
}

export default ListedRestaurants
