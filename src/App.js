import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { fetchTables } from "./requests";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import RestaurantInfo from "./RestaurantInfo";
import MakeRes from "./makeres";
import requests from "./requests";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: "",
      reservationList: []
    };
  }
  
  updateTables = () => {
    fetchTables().then(x => {
      console.log(x);
      this.setState({ allListings: JSON.parse(x) });
    });
  };
  

  deleteReservation = () => {
    fetch();
  };
  changeCalendar = () => {
    fetch();
  };
  /*
	'450-555-1234': {
		Name: 'McDonalds',
		User: 'Best Resto',
		Email: '123@hotmail.com',
		City: 'Montreal',
		Address: '123 rue Bob',
		Phone: '450-555-1234',
		Open: '8:00',
		Close: '22:00',
		Nb2Seaters: 0,
		Nb4Seaters: 0,
		Nb6Seaters: 0,
		Nb8Seaters: 0
	  }
*/
  newReserve = () => {
    fetch("/newReservation", {
      method: "POST",
      body: JSON.stringify({})
    })
      .then(x => x.text())
      .then(x => {
        this.props.itemInfo(x);
        this.props.changePage("account");
      });
  };
  setInfo = info => {
    this.setState({ info: this.props.setInfo });
  };

  logIn = () => {
    fetch("/login"),
      {
        method: "POST"
      };
  };
  SignUp = () => {
    fetch("/login"),
      {
        method: "POST"
      };
  };
  render() {
    console.log("app state", this.state);
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/login"
          render={routeProps => (
            <LoginPage history={routeProps.history} setInfo={this.setInfo} />
          )}
        />
        <Route
          path="/signup"
          render={routeProps => (
            <SignUp history={routeProps.history} setInfo={this.setInfo} />
          )}
        />
        <Route
          path="/restaurant"
          render={routeProps => <RestaurantInfo history={routeProps.history} />}
        />

        <Route
          path="/makeres"
          render={routeProps => (
            <MakeRes history={routeProps.history} setInfo={this.setInfo} />
          )}
        />
      </Switch>
    );
  }
}

export default App;
