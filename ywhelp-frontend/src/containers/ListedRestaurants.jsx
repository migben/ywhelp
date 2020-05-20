import React, { Component } from 'react'
import Restaurant from '../ProfileComponents/Restaurant'

class ListedRestaurants extends Component {

    arrComponents = () => {
        let arrOfRests = this.props.restsArr.map( restObj => {
            return <Restaurant key={restObj.id} restaurant={restObj} />
        })
        return arrOfRests
    }


    render() {
        return (
            <div className="listing">
                <div id="listing-options">
                    {this.arrComponents()}
                </div>
            </div>
        )
    }
}

export default ListedRestaurants
