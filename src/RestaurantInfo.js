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
const GhostBox = styled.span`
  z-index: 1;
  margin-top: -6em;
  transform: translate(x, y);
  top: 25px;
  padding: 50px 50px 50px 50px;
  postiion: absolute;
  justify-content: center;
  background: pink
  opacity: 02;
  max-height: 500px;
  width: 500px;
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
const Homediv = styled.div`
  text-align: center;
  padding: 12.5px 0px;
  margin: auto;
  padding: 50px 0px;
  height: 25px;
  width: 100%;
  background: yellow;
`;
const OuterForm = styled.div`
  background: green;
`;
const InnerInnerBox = styled.div`
  background-color: #ffffff;
  opacity: 1;
`;
const RestoForm = styled.form`
  text-align: center;
  padding: 25px;
  opacity: 0.8;
`;
const HomeButton = styled.button`
  backround: green;
  display: inline-block;
  bottom: 2px;
  margin: 0 50px
  width: 50%;
`;
const TitleOneH = styled.h6`
  padding: 5px;
  background: pink;
  text-align: center;
`;
const TitleTwoH = styled.h6`
  padding: 5px;
  background: pink;
  text-align: center;
`;
class RestaurantInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restoPhone: "450-222-1234",
      tables: {
        nb2seat: "",
        nb4Seat: "",
        nb6Seat: "",
        nb8Seat: ""
        //custSeat: "",
        //custTable: ""
      }
    };
  }
  handleSubmit = event => {
    event.preventDefault();

    fetch("/settings", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        restoPhone: "450-123-1234",
        tables: this.state.tables
      })
    });
    console.log(this.state.tables);
  };
  handleClick = () => {
    //This is how we can update the parent (App) state from the child component
    // this.props.setInfo("some information");
    //Navigate to home
    this.props.history.push("/");
  };
  handleChange = (event, property) => {
    console.log(event.target.value);
    const tables = {
      ...this.state.tables,
      [property]: event.target.value
    };
    // text[property] = event.target.value;
    // this.setState({ inputs }); //or you can use the shorthand here. ES6 is awesome <3
    this.setState({ tables });
  };

  render() {
    return (
      <Wrapper>
        <InnerBox>
          <GhostBox />
          <InnerInnerBox>
            <RestoForm onSubmit={this.handleSubmit}>
              <OuterForm>
                <TitleOneH>fill in seating info</TitleOneH>
                <TitleTwoH>Room</TitleTwoH>
                <div>
                  <div>
                    <button>
                      two seat tables: {this.state.tables.twoSeat}
                    </button>
                    <button>
                      four seat tables: {this.state.tables.fourSeat}
                    </button>
                    <button>
                      six seat tables: {this.state.tables.sixSeat}
                    </button>
                    <button>
                      eight seat tables: {this.state.tables.eightSeat}
                    </button>
                    <button>
                      custom table:
                      {this.state.tables.custTable}-
                      {this.state.tables.custSeat}
                    </button>
                    {/* <button>total tables {JSON.stringify(...this.restaurantInfo)}</button> */}
                  </div>

                  <input
                    placeholder="number of 2 seat tables"
                    type="number"
                    value={this.state.tables.twoSeat}
                    onChange={e => this.handleChange(e, "twoSeat")}
                  />
                </div>
                <div>
                  <input
                    placeholder="number of 4 seat tables"
                    type="number"
                    value={this.state.tables.fourSeat}
                    onChange={e => this.handleChange(e, "fourSeat")}
                  />
                </div>
                <div>
                  <input
                    placeholder="number of 6 seat tables"
                    type="number"
                    value={this.state.tables.sixSeat}
                    onChange={e => this.handleChange(e, "sixSeat")}
                  />
                </div>
                <div>
                  <input
                    placeholder="number of 8 seat tables"
                    type="number"
                    value={this.state.tables.eightSeat}
                    onChange={e => this.handleChange(e, "eightSeat")}
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
              </OuterForm>
              <div />
            </RestoForm>
          </InnerInnerBox>
          <Homediv>
            <HomeButton>
              <Link to="/">home</Link>
            </HomeButton>
          </Homediv>
        </InnerBox>
      </Wrapper>
    );
  }
}
/*
<form onSubmit={this.handleSubmit}>
<label htmlFor="username">Enter username</label>
<input id="username" name="username" type="text" />
*/

export default RestaurantInfo;

//handleSubmit(event) {
//  alert('Text field value is: ' + this.props.restaurantInfo.e);
//}
/*
render() {
  return (
    <div>
      <div>{this.state.text.e}</div>
      <div>{this.state.text.c}</div>
      <input type="text"
        placeholder="Hello!"
        value={this.state.text.e}
        onChange={e => this.handleChange(e, 'e')} />
      <input type="text"
        placeholder="Hello!"
        value={this.state.text.c}
        onChange={e => this.handleChange(e, 'c')} />
      <button onClick={this.handleSubmit}>
        Submit
      </button>
    </div>
  );
}
}
*/
/*
<div>
<input
  placeholder="number of custom tables"
  type="number"
  value={this.state.tables.custTable}
  onChange={e => this.handleChange(e, "custTable")}
/>
<input
  placeholder="number of seats"
  type="number"
  value={this.state.tables.custSeat}
  onChange={e => this.handleChange(e, "custSeat")}
/>
</div>
*/
