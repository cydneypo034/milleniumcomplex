import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBIcon, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import ForIAmLogo from '../images/foriamlogo.png';

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
      <MDBNavbar color="#1a237e indigo darken-4" dark expand="md">
        <MDBNavbarBrand>
         <a href="#!"><img src={ForIAmLogo} alt="blue-logo-with-dove" style={{ width: "10rem", height: "10rem", 
         position: "relative", zIndex: "2" }}/></a>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav left>
            
            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text">About</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text">Vision & Mission</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text">History</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2" className="white-text">Ministries</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">F.I.A. Corporation</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Gospel Music and Recording</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Church Membership</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Software</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text">Contact</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" className="white-text">Donate</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          
          
          <MDBNavbarNav right>

          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="facebook" size="1x" /> &nbsp;
          </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="twitter" size="1x" /> &nbsp;
          </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="instagram" size="1x" /> &nbsp;
          </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="youtube" size="1x" /> &nbsp;
          </MDBNavLink>
          </MDBNavItem>

          </MDBNavbarNav>
          

        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
};