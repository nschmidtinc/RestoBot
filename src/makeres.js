import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { GetDate } from "./requests";
import { GetTime } from "./requests";
const SideBar = styled.div`
 
height: 100%;
  width: 160px;
  position: fixed;
  z-index: -1
  top: 0;
  left: 0;
  display: flex;
  align-items: space between;
  background-color: blue;
  overflow-x: hidden;
  padding-top: 20px;
  padding-right: 0px;
 
`;
const InnerBox = styled.div`
  margin: auto;
  top: 25px;
  padding: 50px;
  position: absolute
  justify-content: center;
  background: pink;
  opacity: 4;
  max-height: 1000px;
  width: 50%;
`;
const HoriSideBar = styled.div`
  opacity: 0.3;
  height: 72%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: 14%;

  display: inline-right;
  position: fixed;
  z-index: -1;
  top: 0;
  margin-top: 8%;
  margin-right: 20%;
  margin-right: 15%;
  left-margin: 15%;

  background-color: blue;
  overflow-x: hidden;
  padding-top: 20px;
  padding-right: 0px;
  &:hover {
    background: black;
    color: white;
    opacity: 0.6;
  }
`;
const InnerBoxShadow = styled.div`
  margin: auto;
  top: 25px;
  z-index: -1;
  padding: 50px;
  position: fixed;
  display: none;
  justify-content: center;
  background: pink;
  opacity: 0.6;
  max-height: 1000px;
  width: 50%;
`;
const Wrapper = styled.div`
  background-image: url(./restaurant-wine-glasses-served-51115.jpeg);
  background-size: cover;
  display: flex;
  align-items: center;
  opacity: 0.9;
  height: 100%;
`;
const StyleButton = styled.div`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  width: 100%;
  font-size: 25px;
  color: pink;
  display: block;
`;
class MakeRes extends Component {
  constructor() {
    super();
    this.state = {
      restoName: "Mcdonalds",
      restoNumber: "450-567-1234",
      clientName: "",
      phoneNumber: "",
      resTime: "",
      resDate: "",
      nbOfPeople: 0,
      city: "Montreal"

      //custSeat: "",
      //custTable: ""
    };
  }
  handleClick = () => {
    //This is how we can update the parent (App) state from the child component
    this.props.setInfo(this.state.loggedIn);
    //Navigate to home
    this.props.history.push("/");
  };
  handleChange = (e, property) => {
    this.setState({ [property]: e.target.value });
  };

  handleSubmit = event => {
    console.log("you submitted");
    event.preventDefault();

    fetch("/userCreate", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        restoName: this.state.restoName,
        restoNumber: this.state.restoNumber,
        tables: this.state.tables,
        clientName: this.state.name,
        clientNumber: this.state.phoneNumber,
        time: this.state.resTime,
        date: this.state.resDate,
        nbOfPeople: parseInt(this.state.nbOfPeople),
        city: this.state.city
      })
    });
    console.log(this.state.tables);
  };
  todaysDate = () => {
    GetDate();
  };

  handleClick = () => {
    //This is how we can update the parent (App) state from the child component
    this.props.setInfo("some information");
    //Navigate to home
    this.props.history.push("/");
  };
  render() {
    console.log("restaraunt", this.props);

    return (
      <Wrapper>
        <SideBar>
          <div>
            <div>
              <div>
                <input />
              </div>
              <div>
                <StyleButton>
                  <Link to="/login">login</Link>
                </StyleButton>
              </div>
            </div>
            <div>
              <StyleButton>
                <Link to="/SignUp">sign up</Link>
              </StyleButton>
            </div>
            <div>
              <StyleButton>
                <Link to="/restaurant">seating</Link>
              </StyleButton>
            </div>
            <div>
              <StyleButton>
                <Link to="/makeres">Reservation</Link>
              </StyleButton>
            </div>
          </div>
        </SideBar>;
        <InnerBox>
          <div>
            <div>
              <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <h1>Please Enter Reservation info</h1>
                  <div>
                    <input
                      required="true"
                      type="text"
                      placeholder={this.name}
                      value={this.state.name}
                      onChange={e => this.handleChange(e, "name")}
                    />
                  </div>
                  <div>
                    <input
                      required="true"
                      type="tel"
                      placeholder="phone number"
                      value={this.state.phoneNumber}
                      onChange={e => this.handleChange(e, "phoneNumber")}
                    />
                  </div>
                  <div>
                    <input
                      required="true"
                      type="date"
                      min={this.todaysDate}
                      placeholder={this.todaysDate}
                      value={this.state.resDate}
                      onChange={e => this.handleChange(e, "resDate")}
                    />
                  </div>
                  <div>
                    <input
                      required="true"
                      placeholder="number of people"
                      value={this.state.nbOfPeople}
                      onChange={e => this.handleChange(e, "nbOfPeople")}
                    />
                  </div>
                  <div>
                    <input
                      required="true"
                      type="time"
                      defaultValue={this.GetTime}
                      placeholder="time"
                      value={this.state.resTime}
                      onChange={e => this.handleChange(e, "resTime")}
                    />
                  </div>
                  <div>
                    <button>
                      <Link to="/">home</Link>
                    </button>
                    <button type="submit" onClick={this.handleSubmit}>
                      <Link to="/" home>
                        submit
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </InnerBox>
      </Wrapper>
    );
  }
}

export default MakeRes;
