import React, { Component } from "react";

class makeRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

}
const makeRow = (tables) => {
    tables

}

render() {
    return (
      <div>
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
        </SideBar>
        <Customers id="customers">
          <tr>
            <th> </th>
            <th>2 person Table</th>
            <th>4 Person Table</th>
            <th>6 person Table</th>
            <th>8 person Table</th>
          </tr>
          <tr>
            <th>1</th>
            
            <CustomersTd>
              <Funky />name number
            </CustomersTd>
            <CustomersTd>
              <Funky />2 name number
            </CustomersTd>
            <CustomersTd>
              <Funky />3 name number
            </CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
          <tr>
            <th>2</th>
            <CustomersTd>
              <Funky />
            </CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
          <tr>
            <th>3</th>
            <CustomersTd>
              <Funky> Nathan 436- 722-5888</Funky>
            </CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
          <tr>
            <th>4</th>
            <CustomersTd>Ernst Handel</CustomersTd>
            <CustomersTd>Roland Mendel</CustomersTd>
            <CustomersTd>Austria</CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
          <tr>
            <th>5</th>
            <CustomersTd>Island Trading</CustomersTd>
            <CustomersTd>Helen Bennett</CustomersTd>
            <CustomersTd>UK</CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
          <tr>
            <th>6</th>
            <CustomersTd>Königlich Essen</CustomersTd>
            <CustomersTd>Philip Cramer</CustomersTd>
            <CustomersTd>Germany</CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
          <tr>
            <th>7</th>
            <CustomersTd>Laughing Bacchus Winecellars</CustomersTd>
            <CustomersTd>Yoshi Tannamuri</CustomersTd>
            <CustomersTd>Canada</CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
          <tr>
            <th>8</th>
            <CustomersTd>Magazzini Alimentari Riuniti</CustomersTd>
            <CustomersTd>Giovanni Rovelli</CustomersTd>
            <CustomersTd>Italy</CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
          <tr>
            <th>9</th>
            <CustomersTd>North/South</CustomersTd>
            <CustomersTd>Simon Crowther</CustomersTd>
            <CustomersTd>UK</CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
          <tr>
            <th>10</th>
            <CustomersTd>Paris spécialités</CustomersTd>
            <CustomersTd>Marie Bertrand</CustomersTd>
            <CustomersTd>France</CustomersTd>
            <CustomersTd>
              <Funky />
            </CustomersTd>
          </tr>
        </Customers>
        <Button />
        <MainDiv />
        {console.log("test", this.state.tables["twoSeat"])}
      </div>
    );
  }
}

export default HomePage;
