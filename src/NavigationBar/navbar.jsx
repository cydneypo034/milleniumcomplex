import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import MCLogo from '../images/mclogo1.png';

export default class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="#ffffff white" dark expand="md">
        <MDBNavbarBrand>
          <img src={MCLogo} className="img-fluid" style={{ width: "10rem", height: "10rem" }}/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav right>

            <MDBNavItem active >
              <MDBNavLink to="#!" className="indigo-text">Home</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="indigo-text">About</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="indigo-text">Contact</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2" className="indigo-text">Ministries</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Film and TV Production</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Music and Recording</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="indigo-text">Donate</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          

        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
};