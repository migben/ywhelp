import React, { Component } from 'react'
import Restaurant from '../ProfileComponents/Restaurant'
import Restaurants from '../ProfileComponents/Restaurants'
import {Switch, Route} from 'react-router-dom'

class ListedRestaurants extends Component {


    state = {
        rests:this.props.restsArr
    }

    arrRestContent = () => {
        let arrOfRests = this.props.restsArr.map( (restObj, i) => {
            return (
                 <Route path = {`/${(restObj.name).split(" ").join("")}`} key={i}>
                    <Restaurant  restaurant={restObj} />
                 </Route>
            )
        })
        return arrOfRests
    }




    render() {
        return (
            <div className="listing">
                <div id="listing-options">
                    <Restaurants  rests={this.props.restsArr} />
                    <Switch>
                        {
                            this.arrRestContent()
                        }
                    </Switch>
                    
                </div>
            </div>
        )
    }
}

export default ListedRestaurants
