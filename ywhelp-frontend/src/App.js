import React, { Component } from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import RestaurantContainer from './containers/RestaurantContainer'
import About from './components/About'
import Restaurant from './ProfileComponents/Restaurant'


class App extends Component{

  state = {
    user: {
      username: "",
      reviews: []
    },
    token: "",
    restaurants: []
  }


  componentDidMount(){

    fetch("http://localhost:3000/restaurants")
      .then( r => r.json())
      .then( restaurants => {
        this.setState({
          restaurants
        })
      })

      if (localStorage.token) {
        fetch("http://localhost:3000/persist", {
            headers: {
              "Authorization": `Bearer ${localStorage.token}`
            }
          })
          .then(r => r.json())
          .then(this.handleResp) // not used yet.
      }
  }

  arrRestContent = () => {
        let arrOfRests = this.state.restaurants.map( (restObj, i) => {
            return (
                <Route path={`/${(restObj.name).split(" ").join("")}`} key={restObj.id}>
                    <Restaurant  restaurant={restObj} />
                </Route>
            )
        })
        return arrOfRests
    }

  render(){
    console.log(this.state.restaurants)

    return(
      <div className="App">
        <NavBar />

        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/restaurants">
            <RestaurantContainer
              restaurants={this.state.restaurants}
              user={this.state.user}
              token={this.state.token}
            />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          {this.arrRestContent()}

        </Switch>

      </div>
    )
  }




}

export default App;
