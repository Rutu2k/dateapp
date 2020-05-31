import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import FetchDate from './FetchDateComponent';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Time Co.Ltd.</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                  <div className="col-12 col-sm-4">
                    <FetchDate></FetchDate>
                  </div>
                  <div className="col-12 col-sm-8 text-right">
                      <h1  className="texttime">Time</h1>
                      <br></br>
                      <h5 >"Your greatest resource is your time!"</h5>
                      <hr color="grey"></hr>
                      <p>" Lorem Ipsum Your greatest resource is your time! Lorem Ipsum Your greatest resource is your time! Lorem Ipsum Your greatest resource is your time! Lorem Ipsum Your greatest resource is your time! "</p>
                  </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;