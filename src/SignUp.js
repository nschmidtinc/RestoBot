import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url(./restaurant-wine-glasses-served-51115.jpeg);
  background-size: cover;
  display: flex;
  align-items: center;
  opacity: 0.9;
  height: 100%;
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
const StyledForm = styled.form``;
const SideBar = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`;

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "admin",
      phoneNumber: "",
      openHours: "",
      closeHours: "",
      city: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
      nb2Seaters: "",
      nb4Seaters: "",
      nb6Seaters: "",
      nb8Seaters: ""
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
    event.preventDefault();
    //this.setState({ loggedIn: true });
    //console.log("I send this", this.event.target);
    console.log(this.state);
    fetch("/signUp", {
      method: "POST",
      body: JSON.stringify(this.state)
    });
  };
  render() {
    return (
      <Wrapper>
        <SideBar>
          <div>This is LoginPage</div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div>
              <Link to="/">home</Link>
              <h1>Login</h1>
              <input
                name="username"
                type="text"
                //data-parse="uppercase"
                placeholder="user"
                value={this.state.userName}
                onChange={e => this.handleChange(e, "userName")}
              />
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="user"
                  value={this.state.password}
                  onChange={e => this.handleChange(e, "password")}
                />
              </div>
              <button
                className="UserLogButton"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
            <div>
              <button onClick={this.handleClick}>home</button>
            </div>
          </form>
        </SideBar>
        <InnerBox>
          <div>
            <StyledForm onSubmit={e => this.handleSubmit(e)}>
              <h1>fill in seating info</h1>
              <h1>Room</h1>
              <div>
                <input
                  type="text"
                  required="true"
                  placeholder="restaraunt name"
                  value={this.state.userName}
                  onChange={e => this.handleChange(e, "userName")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="tel"
                  placeholder="restaraunt phone number"
                  value={this.state.phoneNumber}
                  onChange={e => this.handleChange(e, "phoneNumber")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="text"
                  placeholder="restaraunt address"
                  value={this.state.address}
                  onChange={e => this.handleChange(e, "address")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="email"
                  placeholder="restaraunt email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e, "email")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e, "password")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="password"
                  placeholder="confirm password"
                  value={this.state.confirmPassword}
                  onChange={e => this.handleChange(e, "confirmPassword")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="number"
                  placeholder="open hour"
                  value={this.state.openHours}
                  onChange={e => this.handleChange(e, "openHours")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="number"
                  placeholder="closing hour"
                  value={this.state.closeHours}
                  onChange={e => this.handleChange(e, "closeHours")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="number"
                  placeholder="number of 2 seat tables"
                  value={this.state.nb2Seaters}
                  onChange={e => this.handleChange(e, "nb2Seaters")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="number"
                  placeholder="number of 4 seat tables"
                  value={this.state.nb4Seaters}
                  onChange={e => this.handleChange(e, "nb4Seaters")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="number"
                  placeholder="number of 6 seat tables"
                  value={this.state.nb6Seaters}
                  onChange={e => this.handleChange(e, "nb6Seaters")}
                />
              </div>
              <div>
                <input
                  required="true"
                  type="number"
                  placeholder="number of 8 seat tables"
                  value={this.state.nb8Seaters}
                  onChange={e => this.handleChange(e, "nb8Seaters")}
                />
              </div>
              <div>
                <button
                  placeholder="submit"
                  type="submit"
                  onKeyPress={this.handleSubmit}
                >
                  submit
                </button>
              </div>
            </StyledForm>
            <button>
              <Link to="/">home</Link>
            </button>
          </div>
        </InnerBox>
      </Wrapper>
    );
  }
}

export default SignUp;
