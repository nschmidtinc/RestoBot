import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url(./restaurant-wine-glasses-served-51115.jpeg);
  background-size: cover;
  display: flex;
  align-items: center;
  opacity: 0.6;
  height: 100%;
`;
const InnerBox = styled.div`
  margin: auto;
  display: block;
  top: 50px;
  padding: 200px 0
  postiion: absolute;
  justify-content: center;
  background: pink;
  max-height: 1000px;
  width: 50%;
`;
const Button = styled.button`
  backround: green;
`;

class RestaurantInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: {
        twoSeat: "",
        fourSeat: "",
        sixSeat: "",
        eightSeat: "",
        custSeat: "",
        custTable: ""
      }
    };
  }
  handleSubmit = event => {
    event.preventDefault();

    fetch("/seating", {
      method: "POST",
      body: this.state.tables
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
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1>fill in seating info</h1>
              <h1>Room</h1>
              <div>
                <div>
                  <Button>two seat tables: {this.state.tables.twoSeat}</Button>
                  <button>
                    four seat tables: {this.state.tables.fourSeat}
                  </button>
                  <button>six seat tables: {this.state.tables.sixSeat}</button>

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
              <div>
                <button
                  placeholder="submit"
                  type="submit"
                  onKeyPress={this.handleSubmit}
                >
                  submit
                </button>
              </div>
            </div>
            <div>
              <button>
                <Link to="/">home</Link>
              </button>
            </div>
          </form>
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
