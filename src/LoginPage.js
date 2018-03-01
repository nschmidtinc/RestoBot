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
  background: grey;
  opacity: 4;
  max-height: 1000px;
  width: 50%;
`;
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
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
    this.setState({ loggedIn: true });
    //console.log("I send this", this.event.target);
    console.log(this.state);
    fetch("/login", {
      method: "POST",

      body: JSON.stringify(this.state)
    })
      .then(y => y.text())
      .then(y => {
        let x = JSON.parse(y);
        console.log(x);
      });
  };

  render() {
    console.log("login props", this.props);
    return (
      <Wrapper>
        <InnerBox>
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
        </InnerBox>
      </Wrapper>
    );
  }
}

export default LoginPage;
